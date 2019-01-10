import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Cards = ({ title, cover, link, tags }) => {
  return (
    <div className="flex flex-initial flex-col my-3 px-3 w-full md:my-4 md:px-3 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/4">
      <Link to={link}>
        <article className="overflow-hidden rounded-lg shadow-lg">
          <img className="w-full m-0" src={cover} alt="Sunset in the mountains" />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
          </div>
          <div className="px-4 py-4">
            {tags
              ? tags.map((tag, i) => (
                  <span key={`${tag}-i`} className="inline-block bg-grey-lighter rounded-full mb-1 px-2 py-1 text-xs font-thin text-grey-darker mr-2">
                    #{tag}
                  </span>
                ))
              : null}
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Cards;
