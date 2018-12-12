import React from 'react';
import {Image, View, Text, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    console.log({album});
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={styles.textViewStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>Buy Now</Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    textViewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
}

export default AlbumDetail;
