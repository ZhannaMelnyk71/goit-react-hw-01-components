import PropTypes from 'prop-types'
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    // console.log(title[0].label)
    // console.log(stats[0].percentage)
    
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat_list}>
                {stats.map(item => <li key={item.id} className={css.item}>
                    <span className={css.label}>{item.label}</span> 
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>)}
                
            </ul>
</section>
    )

}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  })), 
}