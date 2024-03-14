'use client'

import classNames from "classnames"

const icons = ["icon-warning-tips", "icon-18plus", "icon-rightarrow", "icon-downarrow", "icon-other-games", "icon-games-hall", "icon-popup-withdrawal", "icon-swipe", "icon-new-wallet", "icon-new-coins", "icon-trash-can", "icon-multi-coins", "icon-gorden", "icon-sa", "icon-pt-new", "icon-playtech-new", "icon-evo-new", "icon-oubo-new", "icon-ball-nine", "icon-unlock", "icon-sg-lottery", "icon-global", "icon-clock-full", "icon-flower", "icon-tiancheng", "icon-vr", "icon-ring-star", "icon-sun-rail", "icon-moon", "icon-sponsorship", "icon-service-online", "icon-fair-game", "icon-affiliate", "icon-vip-club", "icon-gpi-lottery", "icon-ag", "icon-wm", "icon-pt", "icon-pp", "icon-og", "icon-ev", "icon-ea", "icon-n2", "icon-pm-sport", "icon-four-rectangle", "icon-top-wallet", "icon-menu-chess", "icon-menu-promotion", "icon-menu-lottery", "icon-menu-casino", "icon-menu-real-casino", "icon-menu-sport", "icon-down-arrow", "icon-mail2", "icon-service3", "icon-chat", "icon-toast-close", "icon-shield3", "icon-file2", "icon-copy4", "icon-warning3", "icon-qrcode", "icon-feedback", "icon-list2", "icon-timer", "icon-time", "icon-ic", "icon-edit-simple", "icon-basic", "icon-location", "icon-sand-clock", "icon-crown", "icon-phone", "icon-appeal", "icon-fb-sport", "icon-vip", "icon-crypto", "icon-bankcard2", "icon-all-wallet", "icon-history2", "icon-transfer", "icon-deposit", "icon-share3", "icon-bell", "icon-gear", "icon-users2", "icon-note2", "icon-shield2", "icon-service2", "icon-coupon2", "icon-withdraw", "icon-sports", "icon-lottery", "icon-chess", "icon-casino", "icon-tr", "icon-mc", "icon-fc", "icon-am", "icon-search2", "icon-promot", "icon-my", "icon-service", "icon-home", "icon-mail", "icon-race-clock", "icon-line-chart", "icon-pingbo-eSport", "icon-imSport", "icon-big-thumb", "icon-double-arrow", "icon-pingbo", "icon-league", "icon-copy-3", "icon-share", "icon-share2", "icon-link2", "icon-download-3", "icon-ob", "icon-wallet3", "icon-bold-arrow", "icon-refresh2", "icon-partner", "icon-agent", "icon-friend", "icon-cunkuan", "icon-guanbi", "icon-huodong", "icon-jinzhi", "icon-naozhong", "icon-zanting", "icon-info", "icon-play-right", "icon-cancel-order", "icon-full-screen", "icon-narrow", "icon-close-circle", "icon-bottom-menu", "icon-bottom-search", "icon-bottom-activity", "icon-bottom-setting", "icon-bottom-assets", "icon-xianjin", "icon-wallet2", "icon-sc00012", "icon-sc00023", "icon-sc00016", "icon-sc00003", "icon-sc00034", "icon-sc00015", "icon-sc00026", "icon-sc00007", "icon-sc00111", "icon-sc00006", "icon-sc00004", "icon-sc00029", "icon-sc00031", "icon-sc00021", "icon-sc00028", "icon-sc00022", "icon-sc00001", "icon-sc00005", "icon-sc00020", "icon-sc00002", "icon-sina", "icon-ring-download", "icon-ins", "icon-twitter", "icon-fb", "icon-qq", "icon-right-arrow", "icon-left-arrow", "icon-basketball", "icon-poker-heart", "icon-ball-n8", "icon-double-coin", "icon-pen", "icon-three-line", "icon-copy-2", "icon-edit", "icon-clock", "icon-full-start", "icon-wallet-coin", "icon-money", "icon-download-2", "icon-drop-down", "icon-calendar", "icon-big-filter", "icon-fov", "icon-chart", "icon-full", "icon-theatre", "icon-poker", "icon-chidou", "icon-game777", "icon-qian", "icon-lunpan", "icon-buyu", "icon-people", "icon-back", "icon-copy", "icon-link", "icon-clear-fill", "icon-kefu", "icon-arrow-left", "icon-sun-light", "icon-setting", "icon-moon-light", "icon-toast-fail", "icon-toast-success", "icon-filter", "icon-tinybag", "icon-tips", "icon-tixian", "icon-history", "icon-bankcard", "icon-shuzihuobi", "icon-chongzhi", "icon-duihuan", "icon-download", "icon-arrow-bold-right", "icon-arrow-bold-left", "icon-user-fill", "icon-bingo", "icon-rg", "icon-188-sport", "icon-im", "icon-original", "icon-yulechang", "icon-glunpan", "icon-pkshi", "icon-blackjack", "icon-small-tv", "icon-kuailecai", "icon-shijiele", "icon-fivein11", "icon-threed", "icon-lucky-boat", "icon-dipincai", "icon-shuangse", "icon-ky", "icon-xxgame", "icon-buyuyx", "icon-shishicai", "icon-yuenancai", "icon-pcgame", "icon-jikaicai", "icon-kuaisan", "icon-wangqiu", "icon-zmyouxi", "icon-lanqiu", "icon-laohuji", "icon-yxjiemu", "icon-newgame", "icon-csgo", "icon-pingpang", "icon-hotgame", "icon-ltyuanch", "icon-jackpot", "icon-shoucang", "icon-jijiang", "icon-weilaisaishi", "icon-saishi", "icon-zuqiu", "icon-dota", "icon-sbtiyu", "icon-tiyu", "icon-caipiao", "icon-yulecheng", "icon-sun", "icon-moon", "icon-menu-trigger", "icon-three-dot", "icon-arrow-right-simple", "icon-arrow-left-simple", "icon-arrow-up-simple", "icon-arrow-down-simple", "icon-exit", "icon-global", "icon-theme", "icon-clear", "icon-refresh", "icon-pwd-hidden", "icon-pwd-show", "icon-search", "icon-warning", "icon-warning2", "icon-close-simple", "icon-arrow-down", "icon-correct", "icon-error", "icon-arrow-up", "icon-user", "icon-wallet", "icon-shopping", "icon-pad", "icon-diamond", "icon-gift", "icon-list", "icon-users", "icon-shield", "icon-control", "icon-note", "icon-bookmark", "icon-bell", "icon-success", "icon-fail", "icon-arrow-right", "icon-coupon", "icon-filter-2", "icon-sort-hot", "icon-sort-za", "icon-sort-az", "icon-sort-focus", "icon-listen", "icon-png", "icon-play-video", "icon-cloud-upload", "icon-apple", "icon-googleplay", "icon-license", "icon-passport", "icon-kyc-protect", "icon-kyc-camera", "icon-shaibao", "icon-wanzifour", "icon-leaguelegends", "icon-menu-all", "icon-video-play", "icon-bottom-menu2", "icon-boya", "icon-ebet", "icon-sgwin", "icon-led-pig", "icon-led-money", "icon-led-arrow", "icon-add-del", "icon-dep-download", "icon-recommend-award", "icon-commission-award", "icon-outlined-question", "icon-copy-5", "icon-recommend-more", "icon-question", "icon-recommend-user", "icon-calendar-2", "icon-recommend-load", "icon-lock", "icon-new-sys-notice", "icon-scan-qr", "icon-edite", "icon-yychess", "icon-welive", "icon-lock2", "icon-wallet-fill", "icon-overview", "icon-hide", "icon-clean", "icon-read", "icon-my-bet", "icon-transactions", "icon-card-center", "icon-help-center", "icon-global-settings", "icon-logout", "icon-account-shield", "icon-warning3", "icon-cash", "icon-coupon3", "icon-filter-full", "icon-personal-protect", "icon-tournament-flag" ]

const IconsPage = () => {
  return (
    <>
      <div>icons</div>
      <div className="grid grid-cols-12 gap-x-4 gap-y-8">
        {icons.map((v, i) => (
          <div key={i} className="text-center">
            <i
              className={classNames('iconfont text-base', v)}
            />
            <div className="mt-4">{v}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default IconsPage