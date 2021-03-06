import { useState } from 'react';

import { StickyContainer, Sticky } from 'react-sticky';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMap, faTh, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import SinglePhoto from '../../Components/SinglePhoto';


import styles from './index.module.scss';

import data from './data.json';
import Timeline from '../../Components/Timeline';

enum HomeTab {
    Photo,
    Album,
    Timeline
}

enum ShowType {
    Single,
    Grid
}

const PageMain: React.FC = () => {

    const history = useHistory();

    const [showType, setShowType] = useState(ShowType.Single)

    const [tab, setTab] = useState(HomeTab.Timeline);

    return (
        <StickyContainer>
            <div>

                <header className={styles.header}>
                    <div className={styles.logo}>Album</div>
                    <div className={styles.viewSelector}>
                        <div className={`${styles.item} ${showType===ShowType.Single?styles.active:""}`} onClick={() => setShowType(ShowType.Single)}>
                            <FontAwesomeIcon icon={faAlignJustify}/>
                        </div>
                        <div className={`${styles.item} ${showType===ShowType.Grid?styles.active:""}`} onClick={() => setShowType(ShowType.Grid)}>
                            <FontAwesomeIcon icon={faTh}/>
                        </div>
                        <div className={styles.item} onClick={() => history.push("/map")}>
                            <FontAwesomeIcon icon={faMap}/>
                        </div>
                    </div>
                </header>

                <div className={styles.home}>
                    <Sticky topOffset={135}>
                        {({style}) => {
                            return (
                                <div style={style} className={styles.navWrap}>
                                    <div className={styles.nav}>
                                        <div onClick={() => setTab(HomeTab.Photo)} className={`${styles.item} ${tab===HomeTab.Photo?styles.active:""}`}>照片</div>
                                        <div onClick={() => setTab(HomeTab.Album)} className={`${styles.item} ${tab===HomeTab.Album?styles.active:""}`}>影集</div>
                                        <div onClick={() => setTab(HomeTab.Timeline)} className={`${styles.item} ${tab===HomeTab.Timeline?styles.active:""}`}>时间轴</div>
                                    </div>
                                </div>
                            )
                        }}
                    </Sticky>
                    {tab===HomeTab.Photo && <div className={styles.content}>
                        <div>
                            {data.feed.items.map(item => <SinglePhoto key={item.id} photo={item} />)}
                        </div>
                    </div>}
                    {tab===HomeTab.Timeline && <div className={styles.content}>
                        <div className={styles.timeline}>
                            <div className={styles.item}>
                                {data.feed.items.map(item => <Timeline item={item} />)}
                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        </StickyContainer>
    )

}

export default PageMain;