import styled from 'styled-components';

const Title = styled.h1`
  color: SaddleBrown;
  text-align: center;
`;

const Wrapper = styled.div`
  border: 2px solid SaddleBrown;
  border-radius: 5px;
  width: 400px;
  margin-top: 50px;
  margin-left: 100px;
`;

const TitleSection = styled(Title)`
  font-size: 1.5em;
`;

const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  color: Chocolate;
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background: Chocolate;
    outline: 2px solid Chocolate;
  }
`;

const Report = styled.div`
  font-size: 1.25em;
  padding-left: 15px;
  color: Chocolate;
`;

const Notice = styled.p`
  font-size: 1.25em;
  text-align: center;
  color: Chocolate;
`;

export {
  Title,
  Wrapper,
  TitleSection,
  FeedbackWrapper,
  Button,
  Report,
  Notice,
};
