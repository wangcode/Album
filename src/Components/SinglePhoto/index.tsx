import { useMemo } from 'react';
import styles from './index.module.scss';

interface PhotoFile {
    height: number;
    ratio: number;
    url: string;
    width: number;
}

interface Exif {
    aperture: string;
    focus: string;
    iso: number
    shutter: string;
}

interface Equipments {
    alias: string;
    brand: string;
    model: string;
    type: string;
}

interface PhotoMeta {
    captured_at: string;
    category: number;
    location: string;
    exif: Exif;
    equipments: Equipments[];
}

interface PhotoInfo {
    id: string;
    colors: string[];
    files: PhotoFile[];
    meta: PhotoMeta
}

const SinglePhoto: React.FC<{photo: PhotoInfo}> = ({ photo }) => {

    const backgroundColor = useMemo(() => {
        const { colors: [top, middle, bottom] } = photo
        return `linear-gradient(180deg, #${top} 0, #${middle} 50%, #${bottom});`
    }, [photo])

    return (
        <div className={styles.singlePhoto}>
            <div style={{backgroundImage: backgroundColor}} className={styles.photo}>
                <img src={photo.files[0].url} alt=""/>
                <div></div>
            </div>
            <div className={styles.bar}>
                <div className={styles.item}>
                    <div className={styles.title}>日期</div>
                    <div>2016年11月9日 17:44</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>地点</div>
                    <div>美国 · 圣地亚哥</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>设备</div>
                    <div>Canon EOS 5D Mark II</div>
                </div>
            </div>
        </div>
    )

}

export default SinglePhoto;