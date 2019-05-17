- Para instalar clone o repositório e use "yarn install" ou "npm install".
- Após instalar as dependencias use "react-native link" para linkar as dependencias nativas.
- Para executar é necessário ter todo o ambiente de desenvolvimento configurado, Android Studio, JDK, etc..., segue link "https://facebook.github.io/react-native/docs/getting-started".
- Antes de executar execute "cd android && gradlew clean && cd .. && react-native run-android" a partir do pasta do projeto.
- Para executar o projeto em modo de debug use "react-native run-android", para ter melhor experiencia e performace com as animações execute "react-native run-android --variant=release".
- Para realizar os testes use "yarn test" ou "npm test".

- A .apk da versão de release se encontra no diretório root do projeto "app-release.apk".
- O aplicativo só foi testado em dispositivos Android.

Bibliotecas utilizadas:

- @react-native-community/async-storage
- axios
- react
- react-native
- react-native-gesture-handler
- react-native-modal
- react-native-progress
- react-native-vector-icons
- react-navigation
- react-redux
- redux
- redux-saga
- styled-components