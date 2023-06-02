import React, { useState } from "react";
import { SelectItem } from "../../../containers/Home/Select";
import PhoneImg from "../../../images/PhoneImg.png";
import {
  CategoryDiv,
  Container,
  ContentContainer,
  ImageBox,
  Images,
  Inner,
  Inner2,
  NumberBtn,
  SelectBtnContainer,
  TextBox,
} from "./SelectsSty";

const Selects = () => {
  const [selectedCategory, setSelectedCategory] = useState("오디오북");
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <Container>
      <SelectBtnContainer>
        <Inner>
          {SelectItem.map((item) => (
            <CategoryDiv
              key={item.title}
              onClick={() => handleCategoryClick(item.title)}
              selected={selectedCategory === item.title}
            >
              <img src={item.src} alt={item.title} />
              <p>{item.title}</p>
            </CategoryDiv>
          ))}
        </Inner>
      </SelectBtnContainer>
      <ContentContainer>
        <Inner2>
          {SelectItem.map((item) => (
            <>
              {item.contents.map(
                (i) =>
                  selectedCategory === item.title &&
                  selectedNumber === i.number && (
                    <>
                      <TextBox key={i.number}>
                        <div className="boxes">
                          <div className="icon">
                            <img src={item.src} alt={item.src} />
                          </div>
                          <div className="box1">
                            <div className="text1">{item.title}</div>
                            <div className="text2">{item.text}</div>
                          </div>
                          <div className="box2">
                            <div className="text1">{i.function}</div>
                            <div
                              className="text2"
                              dangerouslySetInnerHTML={{ __html: i.content }}
                            />
                            <div className="buttonBox">
                              {SelectItem.map((item) =>
                                item.title === selectedCategory
                                  ? item.contents.map((i) => (
                                      <NumberBtn
                                        key={i.number}
                                        onClick={() =>
                                          handleNumberClick(i.number)
                                        }
                                        selected={selectedNumber === i.number}
                                      >
                                        {i.number}
                                      </NumberBtn>
                                    ))
                                  : null
                              )}
                            </div>
                          </div>
                        </div>
                      </TextBox>
                      <ImageBox>
                        <Images>
                          <iframe
                            title="a"
                            src={i.src}
                            alt={i.src}
                            style={{
                              width: "100%",
                              height: "100%",
                              marginLeft: "7px",
                              position: "absolute",
                            }}
                            allow="autoplay"
                            scrolling="no"
                            loop="1"
                          />
                          <img
                            src={PhoneImg}
                            alt="phone"
                            style={{
                              width: "380px",
                              position: "absolute",
                            }}
                          />
                        </Images>
                      </ImageBox>
                    </>
                  )
              )}
            </>
          ))}
        </Inner2>
      </ContentContainer>
    </Container>
  );
};

export default Selects;
