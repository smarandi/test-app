import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import { Container, DeckSwiper, Card, CardItem, Body } from 'native-base';

import ArticleStyles from '../../styles/ScoreCard/Articles';

class Articles extends Component {
  static propTypes = {
    articlesRead: PropTypes.number.isRequired,
    totalArticles: PropTypes.number.isRequired,
    totalTimeSpent: PropTypes.number.isRequired,
    articleList: PropTypes.array.isRequired,
  };

  renderItem = article => (
    <Card style={{ elevation: 3 }}>
      <CardItem>
        <Body>
          <View style={ArticleStyles.cardStyle} >
            <View style={ArticleStyles.cardIconAndTitleContainer}>
              <View style={ArticleStyles.cardIconContainer}>
                <Image
                  source={article.icon}
                  style={ArticleStyles.articleIcon}
                  resizeMode="cover"
                />
              </View>
              <View style={ArticleStyles.cardTitleContainer}>
                <Text style={ArticleStyles.cardTitle}>
                  {article.title}
                </Text>
              </View>
            </View>
            <View style={ArticleStyles.cardBottomContainer}>
              <View>
                <Text style={ArticleStyles.cardBottomText}>{article.date}</Text>
              </View>
              <View>
                <Text style={ArticleStyles.cardBottomText}>{article.estimatedReadTime} min</Text>
              </View>
              <View style={ArticleStyles.blogTypeContainer}>
                <Text style={ArticleStyles.cardBottomText}>{article.type}</Text>
              </View>
            </View>
          </View>
        </Body>
      </CardItem>
    </Card>
  );

  render() {
    const { articlesRead, totalArticles, totalTimeSpent, articleList } = this.props;
    return (
      <View style={ArticleStyles.articleParent}>
        <View style={ArticleStyles.textSection}>
          <View>
            <Text style={ArticleStyles.articleHeadText}>
              Articles Read ({articlesRead}/{totalArticles})
            </Text>
          </View>
          <View>
            <Text style={ArticleStyles.articleHeadText}>
              {totalTimeSpent} min
            </Text>
          </View>
        </View>
        <View style={ArticleStyles.swipeDeckContainer}>
          <Container>
            <DeckSwiper
              dataSource={articleList}
              renderItem={this.renderItem}
            />
          </Container>
        </View>
      </View>
    );
  }
}

export default Articles;

