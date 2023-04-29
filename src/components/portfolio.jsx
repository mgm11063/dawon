import React from "react";
import { List } from "@react95/core";
import { Explorer103 } from "@react95/icons";
import image01 from "../../src/images/1.jpeg";
import * as S from "./layoutStyling";



function Portfolio({ closePortfolio, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Portfolio.txt"}
      closeModal={closePortfolio}
      height="100%"
      icon={<Explorer103 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closePortfolio}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <h1>Gallery</h1>
          <p>
            우리의 추억들이야 아이폰 갤러리가 다원이 만난 후로 4천 장 넘게 다원이로 물들어가면서 점점 늘어날 때마다 너무 행복해 4천장이 아니라 4억 개까지 가보자고!!<br/>
            여긴 우리의 소중한 시간이고 이야기이자 추억이 있는 장소야 다원아 스크롤 내리면서 우리에게 어떤 여정이 있었는지 봐줘 ( `ω´ )
          </p>
          <hr />
          <div className="gallery_box">
            <img src={image01} />
            <img src={image01} />
            <img src={image01} />
            <img src={image01} />
            <img src={image01} />
            <img src={image01} />
            <img src={image01} />
            
          </div>
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default Portfolio;
