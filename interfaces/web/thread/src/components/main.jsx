import React, { Component } from 'react'
import _ from 'lodash'
import faker from 'faker'
import { Box, Grid, Grommet, Text } from "grommet";
import PropTypes from "prop-types";
import { Dropdown, Search } from "semantic-ui-react";
import { connect } from "react-redux";
import flowRight from 'lodash/flowRight';

import Nav from "../components/nav";
import Thread from "../components/thread";
import ThreadScroll from "../components/threadscroll";
import TopPost from "../components/toppost";
import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.language || '';

const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

class Main extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
    console.log('result', result)
    console.log('results', this.state.results)
    this.setState({ value: result.title })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    const { post: { search } } = this.props;

    console.log('search', search);

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(search, isMatch),
      })
    }, 300)
  }

  render() {
    const { post, isValidToken, onClick, t } = this.props;
    const { isLoading, value, results } = this.state;

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
            <Text>{t('advice')}</Text>
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
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
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
}

Main.propTypes = {
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default flowRight(
  connect(state => state),
  withTranslation(['common'])
)(Main);
