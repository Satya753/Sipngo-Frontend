import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './components/AppNavigator';
import GlobalState from './components/GlobalState';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import userAuthentication from './components/Authentication/userAuthentication';
import AuthStack from './components/Authentication/AuthStack';
import './config/firebase';
import DrawerNavigator from './components/DrawerNavigator';


function Root(){
  return (<DrawerNavigator/>);
}
export default function App() {
  const {user} = userAuthentication();
  global.d = {...user}
  global.user_validated = false;
  console.log(d['uid'])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <GlobalState>
          {user ? <AppNavigator/>:<AuthStack/>}
        </GlobalState>
      </View>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
/*

{
  "uid": "miyPFQBsTPRIFu2HXYsjzFbhqYG2",
  "email": "satyajeet258@gmail.com",
  "emailVerified": false,
  "isAnonymous": false,
  "providerData": [
      {
          "providerId": "password",
          "uid": "satyajeet258@gmail.com",
          "displayName": null,
          "email": "satyajeet258@gmail.com",
          "phoneNumber": null,
          "photoURL": null
      }
  ],
  "stsTokenManager": {
      "refreshToken": "AMf-vBzRkzCV9AUuBc1RWrQbKDrAXXtMNhssus4-c6QT-uMp18s3v5eVlruHUyRhDbHl-7IXcuTLL-pUAvd2k7HCgu1Wg5qVCiwran_ZBdF4UxRtCangzB5mSkGw3caN8a7_1V3mueGlXxb1tag-P-lC-KOBfcdpK0Yl_CFfYIH-aJr7nSy86s_BAUTmXMf9DiqbH4XXlq93RRUL7Ytl_j2dVue8Aa_z0w",
      "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmM2I1YWRhM2NhMzkxNTQ4ZDM1OTJiMzU5MjkyM2UzNjAxMmI5MTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2lwbmdvYXV0aCIsImF1ZCI6InNpcG5nb2F1dGgiLCJhdXRoX3RpbWUiOjE2OTE5MDYwMTcsInVzZXJfaWQiOiJtaXlQRlFCc1RQUklGdTJIWFlzanpGYmhxWUcyIiwic3ViIjoibWl5UEZRQnNUUFJJRnUySFhZc2p6RmJocVlHMiIsImlhdCI6MTY5MTkwNjAxNywiZXhwIjoxNjkxOTA5NjE3LCJlbWFpbCI6InNhdHlhamVldDI1OEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2F0eWFqZWV0MjU4QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TIVZe_C-tTF21Fay_N2V86Loo5F9VgomhJ3-aXyOHaMilfnduyD9v7QV4MHlkYNwih9IEx8bmaxd4johmx1XXXe3O1ifmZiIEu-yjjidimAadmCCY2aj6yGWF3eEopjgG5mrndKK06QkC8Z4aNDGCSHnSW4gdBObMWhGiYzO4Bp3zC8JgO_SClmwJbV2olAzCKIX3XMx5Dd1rB8wDQAYYL_uF0lpY8bMYHcG6lSaPbIb0MjqCjPAr-TSL1iTYdsH9jz7EnSpFU7Q0e73XFu0_6KqXPG7A_h6Md_jy9pFPWsYijh2KTHrRhl21tLRH-2Rkn-mAPBE2ct6Cr5l1R7XZw",
      "expirationTime": 1691909618036
  },
  "createdAt": "1691905923783",
  "lastLoginAt": "1691905923783",
  "apiKey": "AIzaSyDAwPoKeWTFJjbQHYj8yQK7mxxaf7PTGh0",
  "appName": "[DEFAULT]"
}

*/
