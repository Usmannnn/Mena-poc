import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import GoBack from '../components/GoBack';
import OtherFocusable from '../components/OtherFocusable';
import {View} from 'react-native';
import {useApp} from '../context';

const Detail = () => {
  const {focusKey} = useApp();

  return (
    <ScreenWrapper>
      <View style={{flexDirection: 'row'}}>
        <GoBack />
        <OtherFocusable param={focusKey} />
      </View>
    </ScreenWrapper>
  );
};

export default Detail;
