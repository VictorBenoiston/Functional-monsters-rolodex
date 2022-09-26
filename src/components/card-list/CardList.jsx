import Card from '../layout/Card'
import './CardList.css'


const CardList = props => {
    const { list } = props
    return (
        <div className='cardList'>
            {list.map((item) => {
                return (
                    <div key={item.id} >
                        <Card item={item} />
                    </div>
                );
            })}
        </div>
    )
}

export default CardList
