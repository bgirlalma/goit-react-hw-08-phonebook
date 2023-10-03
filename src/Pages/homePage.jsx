import styled from 'styled-components';

const StyledWrapp = styled.div`
background-image: url('https://img.freepik.com/free-photo/customer-service-and-business-contact-concept-wooden-cube-block-which-print-screen-letter-telephone-email-address-and-message_616485-45.jpg?w=1060&t=st=1696323394~exp=1696323994~hmac=d31808fbfece4cfe4759ac09d9aeb2c75be022b8501753f8809bd6c64002ec7a');
background-size: cover; 
  background-repeat: no-repeat; 
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookTitle = styled.h1`
font-family: 'Pathway Gothic One', sans-serif;
font-weight: bolt;
font-size: 56px;
margin-bottom: 10px;
color: #b37700;
`;

const SubTitle = styled.h2`
font-family: 'BlinkMacSystemFont', sans-serif;
font-weight: normal;
font-size: 20px;
margin-bottom: 10px;
color: #f2f2f2;
`;

const DescTitle = styled.p`
font-family: 'BlinkMacSystemFont', sans-serif;
font-weight: bolt;
font-size: 18px;
margin-bottom: 60px;
color: #f2f2f2;
`;

const HomePage = () => {
    return (
        <StyledWrapp>
          <div>
   <BookTitle>Book Contacts App</BookTitle>
   <SubTitle>Simple. Convenient. Efficient.</SubTitle>
   <DescTitle>Start organizing your contacts right now!</DescTitle>
          </div>
        </StyledWrapp>
      );
}

export default HomePage;