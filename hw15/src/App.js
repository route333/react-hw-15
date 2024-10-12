import React, { Component } from 'react';
import Searchbar from './Components/PhotoSearch/Searchbar';
import ImageGallery from './Components/PhotoSearch/ImageGallery';
import Loader from './Components/PhotoSearch/Loader';
import Button from './Components/PhotoSearch/Button';
import Modal from './Components/PhotoSearch/Modal';

const key = '43120738-5c40ac738bb9cceb9c8b4f8fd';
const url = 'https://pixabay.com/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      images: [],
      page: 1,
      isLoading: false,
      showModal: false,
      modalImage: '',
    };
  }

  SearchSubmit = (searchValue) => {
    this.setState({ searchValue, page: 1, images: [] });
  }

  LoadMoreClick = () => {
    this.setState({ page: this.state.page + 1 });
  }

  ImageClick = (image) => {
    this.setState({ modalImage: image, showModal: true });
  }

  ModalClose = () => {
    this.setState({ showModal: false });
  }

  fetchImages = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `${url}?q=${this.state.searchValue}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      this.setState((prevState) => ({ images: [...prevState.images, ...data.hits] }));
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    if (this.state.searchValue) {
      this.fetchImages();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  render() {
    return (
      <div className="app" style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <Searchbar onSubmit={(searchValue) => this.SearchSubmit(searchValue)} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} onClick={(image) => this.ImageClick(image)} />
        )}
        {this.state.images.length > 0 && (
          <Button onClick={() => this.LoadMoreClick()} />
        )}
        {this.state.showModal && (
          <Modal onClose={() => this.ModalClose()} image={this.state.modalImage} />
        )}
      </div>
    );
  }
}

export default App;