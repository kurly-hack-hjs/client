import style from './index.module.scss'

const ConfirmList = () => (
  <div className={style.container}>
    <div className={style.section_header}>
      <em className={style.section_title}>주문물품</em>
      <div className={style.validation_info}>
        <em>총 주문수량</em>
        <span>12개</span>
      </div>
      <div className={style.validation_info}>
        <em>오류항목</em>
        <span>3개</span>
      </div>
    </div>
    <ul className={style.validation_list}>
      <li>
        <div className={style.validation_result}>
          <img />
          <span>미감지</span>
        </div>
        <p>[폴바셋] 바리스타 돌체라떼 330ml</p>
        <span>수량: 1</span>
      </li>
      <li>
        <div className={`${style.validation_result} ${style.success}`}>
          <img />
          <span>미감지</span>
        </div>
        <p>[폴바셋] 바리스타 돌체라떼 330ml</p>
        <span>수량: 1</span>
      </li>
      <li>
        <div className={`${style.validation_result} ${style.warning}`}>
          <img />
          <span>미감지</span>
        </div>
        <p>[폴바셋] 바리스타 돌체라떼 330ml</p>
        <span>수량: 1</span>
      </li>
      <li>
        <div className={style.validation_result}>
          <img />
          <span>미감지</span>
        </div>
        <p>[폴바셋] 바리스타 돌체라떼 330ml</p>
        <span>수량: 1</span>
      </li>
    </ul>
  </div>
)

export { ConfirmList }
