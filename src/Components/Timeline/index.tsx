
import { PhotoInfo } from '../SinglePhoto';
import styles from './index.module.scss';


import moment from 'moment';



const Timeline: React.FC<{item: PhotoInfo}> = ({item}) => {

    return (
        <div className={styles.timeline}>
            <div className={styles.datetime}>
                {/* <div className={styles.checkall}>123</div> */}
                <div>{moment(parseInt(item.meta.captured_at)).format("M月DD日 dd")}</div>
            </div>
            <div className={styles.photos}>
                {
                    [1,2].map(item =><div className={styles.item}><div style={{width: 200, height: 260, backgroundColor: "#08c"}} /></div>)
                }
            </div>
        </div>
    )

}

export default Timeline;