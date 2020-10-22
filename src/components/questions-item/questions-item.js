import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { decode } from 'he';

import './questions-item.scss';

const QuestionsItem = ({ data }) => {

  function getDateOfPublication(date) {
    const postedDate = new Date(date);
    const dateArr = postedDate.toString().split(' ');
    
    return `asked ${dateArr[1]} ${dateArr[2]} '${postedDate.getSeconds()} at ${postedDate.getHours()}:${postedDate.getMinutes()} `;
  }

  function isAnswered(isAnswered, answerCount) {
    let activeClases = 'status';

    if (isAnswered) {
      activeClases += ' answered-accepted';
    }
    if (answerCount > 0) {
      activeClases += ' answered';
    }
    return activeClases;
  }

  return (
    <Fragment>
      <div className="stats-container">
        <div className="votes">
          <div className="mini-counts"><span>{data.score}</span></div>
          <div>vote{data.score !== 1 ? 's' : ''}</div>
        </div>
        <div className={isAnswered(data.is_answered, data.answer_count)}>
          <div className="mini-counts"><span>{data.answer_count}</span></div>
          <div>answer{data.answer_count !== 1 ? 's' : ''}</div>
        </div>
        <div className="views">
          <div className="mini-counts">
            <span>
              {
                data.view_count >= 1000 ?
                  (data.view_count / 1000).toFixed(0) + 'k' : data.view_count
              }
            </span>
          </div>
          <div>view{data.view_count !== 1 ? 's' : ''}</div>
        </div>
      </div>
      <div className="summary">
          <h3>
            <Link to={`/questions/${data.question_id}`} className="question-hyperlink">
              {decode(data.title)}
            </Link>
          </h3>
          <div className="tags">
            {
              data.tags.map(tag => 
                <Link
                  key={tag}
                  to={`/tags/${tag}`}
                  className="post-tag"
                  title={`show questions tagged '${tag}'`}
                  rel="tag"
                >{tag}</Link>
              )
            }
          </div>
          <div className="started">
            <Link to={`/questions/${data.question_id}`} className="started-link">
              <span className="relativetime">
                {getDateOfPublication(data.creation_date)}
              </span>
            </Link>
            <Link to={`/users/${data.owner.display_name}`}>
              {data.owner.display_name} 
            </Link>
            <span className="reputation-score" title="reputation score">
              {` ${data.owner.reputation}`}
            </span>
        </div>
      </div>
    </Fragment>
  );
};

export default QuestionsItem;