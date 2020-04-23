import * as React from 'react';
import _ from 'lodash';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ComponentScreenTemplate } from 'components/screens/templates/ComponentScreenTemplate/ComponentScreenTemplate';
import { ScrollView } from 'react-native';
import { Thumbnail } from 'components/shared/Thumbnail';



const __imageUrls: string[] = [
  'https://vignette.wikia.nocookie.net/memoryalpha/images/7/74/Enterprise_NX-01.jpg/revision/latest?cb=20160106180837&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/b/be/USS_Enterprise_%28NCC-1701%29%2C_ENT.jpg/revision/latest?cb=20171022133400&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/d/df/USS_Enterprise-A_quarter.jpg/revision/latest?cb=20100518022537&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/e/e7/USS_Enterprise-B_in_drydock.jpg/revision/latest?cb=20100516214954&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/5/5c/USS_Enterprise-C.jpg/revision/latest?cb=20161205221423&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/2/26/Kavis_Alpha_sector.jpg/revision/latest?cb=20161120174853&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/6/66/USS_Enterprise-E_in_nebula.jpg/revision/latest?cb=20170519170420&path-prefix=en',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/b/be/USS_Enterprise-J%2C_dorsal_view.jpg/revision/latest?cb=20121221004633&path-prefix=en'
];



export const ThumbnailScreen: React.FC<NavigationStackScreenProps> = props => {
  return (
    <ComponentScreenTemplate {...props}>
      <ScrollView horizontal>
        {_.map(__imageUrls, imageUrl => (
          <Thumbnail
            key={imageUrl}
            imageUrl={imageUrl}
            lightboxOnPress
            size={100} />
        ))}
      </ScrollView>
    </ComponentScreenTemplate>
  );
};
