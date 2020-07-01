import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Text } from "grommet";
import PropTypes from "prop-types";
import { Dropdown, Placeholder, Search } from "semantic-ui-react";
import flowRight from 'lodash/flowRight';
import escapeRegExp from 'lodash/escapeRegExp'
import filter from 'lodash/filter'
import RingLoader from "react-spinners/RingLoader";
import LoadingOverlay from 'react-loading-overlay';
import _ from 'lodash';

import Nav from "../components/nav";
import ThreadScroll from "../components/threadscroll";
import TopPost from "../components/toppost";
import nextI18NextInstance from '../../i18n';
import { fetchUsersRequest } from "../actions/users";
import { changeSortOrder } from "../actions/post";

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Main(props) {
  const [suggestions, setSuggestions] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [value, setValue] = useState('')
  const [filterValue, setFilterValue] = useState('Sort Descending')

  function handleResultSelect(e, { result }) {
    //setValue(result.title)
  }

  function handleToggleInProgress(value) {
    setIsLoading(value)
  }

  const { isValidToken, onClick, t } = props;
  const { module, processingModules } = useSelector(state => state.module)
  const { posts, processingPosts } = useSelector(state => state.post)
  const { users, processingUsers } = useSelector(state => state.users)

  function handleSearchChange(e, { value }) {
    setIsSearching(true)
    setValue(value)

    setTimeout(() => {
      if (value.length < 1) {
        setIsSearching(false)
        setResults([])
        setValue('')

        return
      }

      const re = new RegExp(escapeRegExp(value), 'i')
      const isMatch = (result) => re.test(result.title) || re.test(result.contents)

      setResults(filter(posts, isMatch))
      setIsSearching(false)

    }, 300)
  }

  const dispatch = useDispatch();

  function handleSortChange(e, data) {
    setFilterValue(data.text)
    dispatch(
      changeSortOrder(data.text)
    );
  }

  useEffect(() => {
    const accountId = localStorage.getItem("accountId");
    if (!accountId) {
      return
    }

    dispatch(
      fetchUsersRequest(accountId)
    );
  }, []);

  useEffect(() => {
    if (window && window.location.hash) {
      const elmnt = document.getElementById(window.location.hash.substr(1));
      console.log('elmnt', elmnt)
      if (elmnt) {
        elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }  
    }
  }, [posts]);

  useEffect(() => {
    if (users && users.length > 0) {
      const localSuggestions = [];
      const usersLength = users.length;

      for (let x = 0; x < usersLength; x += 1) {
        localSuggestions.push({
          text: users[x]['first-name'],
          value: users[x]['first-name'],
          url: ''
        })
      }

      setSuggestions(localSuggestions)
    }
  }, [users]);

  return (
    <LoadingOverlay
      active={isLoading || processingModules || processingPosts || processingUsers}
      spinner={<RingLoader size={150} color={"#123abc"} />}
      text='Wheels turning, please wait...'
    >
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
          <Nav onClick={onClick} module={module}/>
        </Box>
        <Box gridArea="middle" background="light-2">
          {module ?
          (<Box
            border={{ color: "brand", size: "small" }}
            pad="medium"
            flex="grow"
            round="small"

          >
            <Text alignSelf="center">{t('guidelines')}</Text>
            &nbsp;
            <Text size="large">{module.help[getCurrentLang()]}</Text>
          </Box>) :
          (
            <Placeholder fluid>
              <Placeholder.Line length='full' />
              <Placeholder.Line length='very long' />
              <Placeholder.Line length='long' />
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
              <Placeholder.Line length='very short' />
            </Placeholder>
          )
          }
          <p>&nbsp;</p>
          {isValidToken ?
          (<Box
            border={{ color: "brand", size: "medium" }}
            pad="medium"
            flex="grow"
            round="small"
          >
            <TopPost handleToggleInProgress={handleToggleInProgress} suggestions={suggestions} />
          </Box>) : null}
          <Box pad="medium" flex="grow" direction="row" justify='between'>
            <Dropdown 
              text={t('sort')} 
              icon='sort' 
              value={filterValue}
            >
              <Dropdown.Menu>
                {filterValue === 'Sort Ascending' ?
                <Dropdown.Item active icon='sort up' text='Sort Ascending' onClick={handleSortChange} /> : 
                <Dropdown.Item icon='sort up' text='Sort Ascending' onClick={handleSortChange} />
                }
                {filterValue === 'Sort Descending' ?
                <Dropdown.Item active icon='sort down' text='Sort Descending' onClick={handleSortChange} /> :
                <Dropdown.Item icon='sort down' text='Sort Descending'onClick={handleSortChange}  />
                }
                {filterValue === 'Likes' ?
                <Dropdown.Item active icon='thumbs up' text='Likes' onClick={handleSortChange} /> :
                <Dropdown.Item active icon='thumbs up' text='Likes' onClick={handleSortChange} />
                }
                {filterValue === 'Dislikes' ?
                <Dropdown.Item active icon='thumbs down' text='Dislikes' onClick={handleSortChange} /> :
                <Dropdown.Item icon='thumbs down' text='Dislikes'  onClick={handleSortChange} />
                }
                {filterValue === 'Shares' ?
                <Dropdown.Item active icon='share alternate' text='Shares'onClick={handleSortChange}  /> :
                <Dropdown.Item icon='share alternate' text='Shares' onClick={handleSortChange} />
                }
              </Dropdown.Menu>
            </Dropdown>

            <Search
              loading={isSearching}
              onResultSelect={handleResultSelect}
              onSearchChange={_.debounce(handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
            />
          </Box>
          <Box 
            pad="medium" 
            border={{ color: "brand", size: "small" }}
            flex="grow" 
            round="small"
          >
            {module ?
            (<ThreadScroll suggestions={suggestions} isValidToken={isValidToken} searches={results} posts={posts} />) :
            (<Placeholder fluid> <Placeholder.Line length='full' /></Placeholder>)}
          </Box>
        </Box>
      </Grid>
    </LoadingOverlay>
  )
}

Main.propTypes = {
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default flowRight(
  withTranslation(['common'])
)(Main);
