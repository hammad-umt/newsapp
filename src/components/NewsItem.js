import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, ImageUrl, newsUrl } = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!ImageUrl?"https://upload.wikimedia.org/wikipedia/commons/a/a7/Olympic_flag.svg":ImageUrl} className="card-img-top" alt={title || "News Image"} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer"  className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
