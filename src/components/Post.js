import React from 'react';

export default ({post}) => {
    return (
        <div className="card text-left">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
          </div>
        </div>
    )
}
