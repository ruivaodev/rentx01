import React from 'react';

import * as S from './styles';

interface Props {
  imagesUrl: string[];
}

const ImageSlider = ({ imagesUrl }: Props) => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </S.CarImageWrapper>
    </S.Container>
  );
};

export default ImageSlider;