/**
 * Created by MalcolmChen on 2018-03-01.
 */
import React,{Component} from 'react';
import { ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = {albums:[]};


    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(data => {
                this.setState({ albums: data });
            });
    }

    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }//function render ends

}

export default AlbumList;