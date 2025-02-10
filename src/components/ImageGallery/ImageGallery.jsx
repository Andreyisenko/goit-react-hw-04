
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'
const ImageGallery = ({articles}) => {
  return (
    <ul className={css.gallery}>
	{articles.map(article => (<li className={css.item} key={article.id}>
		<ImageCard article={article}/>
	</li>))}
	
</ul>
  )
}

export default ImageGallery