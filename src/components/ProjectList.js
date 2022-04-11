import React from 'react';

export default function ProjectList(props) {
  const { project } = props;
  const projectColumns = [[], [], []];
  let column = 0;

  for (let index = 0; index < project.length; index += 1) {
    const element = project[index];
    if (column === 3) column = 0;
    projectColumns[column].push(element);
    column += 1;
  }

  // console.log(projectColumns);
  return (
    <div className='img-box'>
      <div className='img-colum'>
        {projectColumns[0].map((o, index) => {
          return (
            <img
              className='img-item'
              src={o.img}
              key={index + 1}
              alt={index + 1}
              data-category={o.category}
            />
          );
        })}
      </div>

      <div className='img-colum'>
        {projectColumns[1].map((o, index) => {
          return (
            <img
              className='img-item'
              src={o.img}
              key={index + 1}
              alt={index + 1}
              data-category={o.category}
            />
          );
        })}
      </div>

      <div className='img-colum'>
        {projectColumns[2].map((o, index) => {
          return (
            <img
              className='img-item'
              src={o.img}
              key={index + 1}
              alt={index + 1}
              data-category={o.category}
            />
          );
        })}
      </div>
    </div>
  );
}
