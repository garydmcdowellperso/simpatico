import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Box, Grid, Grommet, Text } from "grommet";
import PropTypes from "prop-types";
import { Dropdown, Search } from "semantic-ui-react";
import flowRight from 'lodash/flowRight';
import escapeRegExp from 'lodash/escapeRegExp'
import filter from 'lodash/filter'

import Nav from "../components/nav";
import ThreadScroll from "../components/threadscroll";
import TopPost from "../components/toppost";


import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Main(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [value, setValue] = useState('')

  
  function handleResultSelect(e, { result }) {
    setValue(result.title)
  }

  function handleSearchChange(e, { value }) {
    setIsLoading(true)
    setValue(value)

    const { post: { search } } = props;

    setTimeout(() => {
      if (value.length < 1) {
        setIsLoading(false)
        setResults([])
        setValue('')

        return
      }

      const re = new RegExp(escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      setIsLoading(true)
      setResults(filter(search, isMatch))
    }, 300)
  }

  const { isValidToken, onClick, t } = props;
  const { module } = useSelector(state => state.module)
  const { post } = useSelector(state => state)

  if (!module) {
    return (<p>Loading</p>)
  }

  return (
    <Grid
      fill
      rows={["xxsmall", "flex"]}
      columns={["flex"]}
      gap="small"
      areas={[
        { name: "header", start: [0, 0], end: [2, 0] },
        { name: "left", start: [0, 1], end: [0, 1] },
        { name: "middle", start: [0, 1], end: [2, 1] },
        { name: "right", start: [2, 1], end: [2, 1] }
      ]}
    >
      <Box gridArea="header">
        <Nav onClick={onClick} />
      </Box>
      <Box gridArea="middle" background="light-2">
        <Box
          border={{ color: "brand", size: "small" }}
          pad="medium"
          flex="grow"
        >
          <Text>{module.help[getCurrentLang()]}</Text>
        </Box>
        {isValidToken ?
        (<Box
          border={{ color: "brand", size: "large" }}
          pad="medium"
          flex="grow"
        >
          <TopPost />
        </Box>) : null}
        <Box pad="medium" flex="grow" direction="row" justify='between'>
          <Dropdown text={t('sort')} icon='sort'>
            <Dropdown.Menu>
              <Dropdown.Item icon='sort up' text='Sort Ascending' />
              <Dropdown.Item icon='sort down' text='Sort Descending' />
              <Dropdown.Item icon='thumbs up' text='Likes' />
              <Dropdown.Item icon='thumbs down' text='Dislikes' />
              <Dropdown.Item icon='share alternate' text='Shares' />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text={t('filter')} icon='list'>
            <Dropdown.Menu>
              <Dropdown.Item icon='sort up' text='Sort Ascending' />
              <Dropdown.Item icon='sort down' text='Sort Descending' />
              <Dropdown.Item icon='thumbs up' text='Likes' />
              <Dropdown.Item icon='thumbs down' text='Dislikes' />
              <Dropdown.Item icon='share alternate' text='Shares' />
            </Dropdown.Menu>
          </Dropdown>
          <Search
            loading={isLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={_.debounce(handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
          />
        </Box>
        <Box pad="medium" flex="grow">
          <ThreadScroll isValidToken={isValidToken} posts={results.length > 0 ? results : post.posts}/>
        </Box>
      </Box>
    </Grid>
  )
}

Main.propTypes = {
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default flowRight(
  withTranslation(['common'])
)(Main);
