<<<<<<< HEAD
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import test from "./ImgCard.json"; //ImgCard.json <<<< 테스트용 데이터
=======
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Link} from 'react-router-dom';
import test from './ImgCard.json' //ImgCard.json <<<< 테스트용 데이터
import '../../css/MainHome.css' //메인홈 이미지 카드에서 프로필 정보를 보기 위한 css

>>>>>>> 9139872530bf723e69440fa46656d4854caf9569

export default function MasonryImageList() {
  return (
    //  이미지카드 디자인 틀
    <Box
<<<<<<< HEAD
      sx={{
        width: "auto",
        height: "auto",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
      }}
    >
      <ImageList variant="masonry" cols={4} gap={10}>
        {/* ImgCard.json에서 데이터를 가져오는 부분 */}
        {test.itemData.map((item) => (
          // hover-zoom 을 이용해서 이미지 위에 마우스를 올리면 이미지가 확대되는 효과
          <ImageListItem key={item.img} className="bg-image hover-zoom">
            <Link to="mypage">
              <img
                src={`${item.img}?w=400&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
=======
    sx={{
      width: "auto",
      height: "auto",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
    }}
  >
    
    <ImageList variant="masonry" cols={4} gap={10}>
    {/* ImgCard.json에서 데이터를 가져오는 부분 */}
      {test.itemData.map((item) => ( 
      // hover-zoom 을 이용해서 이미지 위에 마우스를 올리면 이미지가 확대되는 효과
        <ImageListItem key={item.img} className="banner_img"> 
          <Link to="mypage">
            <img
              src={`${item.img}?w=400&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
          </Link>
      {/* 이미지 카드에 마우스 올리면 닉네임이 보임 */}
          <p className="hover_text">
            @{item.title}
          </p>
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
>>>>>>> 9139872530bf723e69440fa46656d4854caf9569
  );
}
