import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анимация
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Стили
const Container = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: rgba(222, 199, 177, 1);
  padding: 27px 70px;
  color: rgba(0, 0, 0, 1);
  font: 400 24px Roboto, sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font: 500 128px/0.8 "Alumni Sans", sans-serif;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    margin-right: 40px;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: rgba(100, 100, 100, 1);
    }

    @media (max-width: 768px) {
      margin-right: 20px;
      font-size: 16px;
    }
  }
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 0 70px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ArtistProfileContainer = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 150px;
  max-width: 843px;
  width: 100%;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImage = styled.div`
  flex: 0 0 64%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  flex: 0 0 36%;
  font-family: 'Roboto', sans-serif;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

const InfoTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
`;

const InfoDetails = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-top: 131px;
`;

const ArtworkCard = styled.article`
  background-color: rgba(231, 226, 220, 1);
  font-family: 'Alumni Sans', sans-serif;
  color: rgba(0, 0, 0, 1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ArtworkGallery = styled.section`
  margin-top: 109px;
  animation: ${fadeIn} 1s ease-in;
`;

const GalleryTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font: 500 40px "Abhaya Libre Medium", -apple-system, Roboto, Helvetica, sans-serif;
  margin-bottom: 40px;
`;

const Footer = styled.footer`
  background-color: rgba(253, 247, 240, 1);
  border-radius: 5px;
  margin-top: 212px;
  padding: 60px 70px 109px;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

// Компоненты
const ArtistProfile = ({ imageUrl, artistInfo }) => {
    return (
        <ArtistProfileContainer>
            <ProfileImage>
                <Image src={imageUrl} alt="Artist profile" />
            </ProfileImage>
            <ProfileInfo>
                <InfoTitle>о художнике:</InfoTitle>
                <InfoDetails>
                    никнейм: {artistInfo.nickname}<br />
                    Город: {artistInfo.city}<br />
                    жанр: {artistInfo.genre}<br />
                    Образование: {artistInfo.education}<br />
                    Контакты: {artistInfo.contact}
                </InfoDetails>
            </ProfileInfo>
        </ArtistProfileContainer>
    );
};

const ArtworkCardComponent = ({ imageUrl, title, artistName, price }) => {
    return (
        <ArtworkCard>
            <div style={{ position: 'relative', aspectRatio: '1.224' }}>
                <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '10px 18px', fontSize: '24px', fontWeight: '500', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>{title}</p>
            </div>
            <h3 style={{ fontSize: '36px', fontWeight: '600' }}>{artistName}</h3>
            {price && <p style={{ fontSize: '24px', fontWeight: '500' }}>цена {price}р</p>}
        </ArtworkCard>
    );
};

const ArtworkGalleryComponent = ({ artworks }) => {
    return (
        <ArtworkGallery>
            <GalleryTitle>картины художника</GalleryTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {artworks.map((artwork, index) => (
                    <ArtworkCardComponent
                        key={index}
                        imageUrl={artwork.imageUrl}
                        title={artwork.title}
                        artistName={artwork.artistName}
                        price={artwork.price}
                    />
                ))}
            </div>
        </ArtworkGallery>
    );
};

const FooterComponent = () => {
    return (
        <Footer>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <p>+7952347 78 87</p>
                    <p>SOZIDAI@MAIL.RU</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h2>sozidai</h2>
                    <p>Modular design. Composition</p>
                    <p>© 2024 All rights reserved</p>
                </div>
            </div>
        </Footer>
    );
};

// Основной компонент приложения
const SozidaiApp1 = () => {
    const artistInfo = {
        nickname: 'Анна',
        city: 'Новосибирск',
        genre: 'флюид',
        education: 'НГПУ',
        contact: 'anna@mail.ru'
    };

    const artworks = [
        { imageUrl: 'https://example.com/image1.jpg', title: 'Artwork 1', artistName: 'Анна Аверина', price: '15 000' },
        { imageUrl: 'https://example.com/image2.jpg', title: 'Artwork 2', artistName: 'Анна Аверина', price: '20 000' },
        { imageUrl: 'https://example.com/image3.jpg', title: 'Artwork 3', artistName: 'Анна Аверина', price: '25 000' },
        // Добавьте остальные произведения искусства...
    ];

    return (
        <Container>
            <Header>
                <Title>sozidai</Title>
                <Nav>
                    <a href="#">КАРТИНЫ</a>
                    <a href="#">ХУДОЖНИКИ</a>
                    <a href="#">О КОМПАНИИ</a>
                    <a href="#">АУКЦИОН</a>
                </Nav>
            </Header>
            <Main>
                <ArtistProfile imageUrl="https://example.com/artist.jpg" artistInfo={artistInfo} />
                <ArtworkGalleryComponent artworks={artworks} />
            </Main>
            <FooterComponent />
        </Container>
    );
};

export default SozidaiApp1;

