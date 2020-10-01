import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';

const CardExample = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size='6' sm='4'>
          <MDBCol style={{ maxWidth: '22rem' }} className='pt-5 '>
            <MDBCard>
              <MDBCardImage
                className='img-fluid'
                src='https://source.unsplash.com/1600x900/?programming language,python'
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Python</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href='#' className='text-center'>
                  Take Quiz
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCol>
        <MDBCol size='6' sm='4'>
          <MDBCol style={{ maxWidth: '22rem' }} className='pt-5 '>
            <MDBCard>
              <MDBCardImage
                className='img-fluid'
                src='https://source.unsplash.com/1600x900/?programming language,c++'
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>C++</MDBCardTitle>
                <MDBCardText>
                  Take a quiz of c++ programming language
                </MDBCardText>
                <MDBBtn href='/c++/quiz'>Take Quiz</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCol>
        <MDBCol size='6' sm='4'>
          <MDBCol style={{ maxWidth: '22rem' }} className='pt-5 '>
            <MDBCard>
              <MDBCardImage
                className='img-fluid'
                src='https://source.unsplash.com/1600x900/?programming language,java'
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Java</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href='#'>Take Quiz</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
