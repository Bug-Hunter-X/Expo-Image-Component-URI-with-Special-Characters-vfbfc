```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyImage = ({ uri }) => {
  const encodedUri = encodeURIComponent(uri);
  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyImage; 
```