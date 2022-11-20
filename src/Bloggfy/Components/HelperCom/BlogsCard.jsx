import React from "react";
import { Link } from "react-router-dom";
import Education from "../BlogComponets/Education";

const BlogsCard = (props) => {
  let categoryStr;

  /*
  if (props.title === "Edcation") {
    resultCom = com;
  } else if (props.title === "Technology") {
    resultCom = com;
  } else if (props.title === "Arts") {
    resultCom = com;
  } else if (props.title === "Business") {
    resultCom = com;
  } else if (props.title === "Finance") {
    resultCom = com;
  } else if (props.title === "Nature") {
    resultCom = com;
  } else if (props.title === "Social") {
    resultCom = com;
  } else if (props.title === "Unity") {
    resultCom = com;
  }
  */

  let title = props.blogCard.title;

  console.log("hello its props titles ",title,typeof(title));
  switch (title) {
    case "Education": {
    //   categoryStr = Education;
      categoryStr = "education";
      console.log("Hello its cate card : ",categoryStr)
      break;
    }
    case "Technology": {
      categoryStr = "technology";
      break;
    }
    case "Arts": {
      categoryStr = "arts";
      break;
    }
    case "Business": {
      categoryStr = "business";
      break;
    }
    case "Finance": {
      categoryStr = "finance";
      break;
    }
    case "Nature": {
      categoryStr = "nature";
      break;
    }
    case "Society": {
      categoryStr = "social";
      break;
    }
    case "Unity": {
      categoryStr = "unity";
      break;
    }
    case "Fitness": {
      categoryStr = "fitness";
      break;
    }
    default: {
    //   resultCom = null;
        categoryStr =  null;
    }
  }

   let com = (
    <Link to={"/blog/"+categoryStr}>
      <img src={props.blogCard.img} alt="" />
      <span className="titleName">{props.blogCard.title}</span>
    </Link>
  );

  return (
    <div className="cat">
      <div className="card">
        {com}
      </div>
    </div>
  );
};

export default BlogsCard;
