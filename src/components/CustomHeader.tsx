import React from 'react';
import {Text, View, ViewProps} from 'react-native';
import styled from 'styled-components';
import {useAppSelector} from '@store/hooks';

interface CustomHeaderProps extends ViewProps {
  title: string;
}

function CustomHeader({title, style}: CustomHeaderProps): JSX.Element {
  const commentsCount = useAppSelector(state => state.comments.length);

  return (
    <HeaderViewStyled style={style}>
      <Text>{title}</Text>
      <Text>{commentsCount}</Text>
    </HeaderViewStyled>
  );
}

const HeaderViewStyled = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export default CustomHeader;
