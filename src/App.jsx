function App() {
  return (
    <div className="App">
      <h1>React Clean Code Payments CSS example</h1>

      {/* <!-- 

  PAGE 02

   --> */}

      <h2>2️⃣ 카드 추가 - 카드사 선택</h2>
      <div class="root">
        <div class="app">
          <h2 class="page-title">&lt;카드 추가</h2>
          <div class="card-box">
            <div class="small-card">
              <div class="card-top">
                <span class="card-text">클린카드</span>
              </div>
              <div class="card-middle">
                <div class="small-card__chip"></div>
              </div>
              <div class="card-bottom">
                <div class="card-bottom__number">
                  <span class="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div class="card-bottom__info">
                  <span class="card-text">NAME</span>
                  <span class="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div class="input-container">
            <span class="input-title">카드 번호</span>
            <div class="input-box">
              <input class="input-basic" type="text" value="1111" />
              <input class="input-basic" type="text" value="2222" />
              <input class="input-basic" type="password" value="1111" />
              <input class="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div class="input-container">
            <span class="input-title">만료일</span>
            <div class="input-box w-50">
              <input class="input-basic" type="text" placeholder="MM" />
              <input class="input-basic" type="text" placeholder="YY" />
            </div>
          </div>
          <div class="input-container">
            <span class="input-title">카드 소유자 이름(선택)</span>
            <input
              type="text"
              class="input-basic"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            />
          </div>
          <div class="input-container">
            <span class="input-title">보안코드(CVC/CVV)</span>
            <input class="input-basic w-25" type="password" />
          </div>
          <div class="input-container">
            <span class="input-title">카드 비밀번호</span>
            <input class="input-basic w-15" type="password" />
            <input class="input-basic w-15" type="password" />
            <input class="input-basic w-15" type="password" />
            <input class="input-basic w-15" type="password" />
          </div>
          <div class="button-box">
            <span class="button-text">다음</span>
          </div>
        </div>
        <div class="modal-dimmed">
          <div class="modal">
            <div class="flex-center">
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
            </div>
            <div class="flex-center">
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
              <div class="modal-item-container">
                <div class="modal-item-dot"></div>
                <span class="modal-item-name">클린 카드</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 

  PAGE 03

   --> */}

      <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      <div class="root">
        <div class="app">
          <h2 class="page-title">&lt;카드 추가</h2>
          <div class="card-box">
            <div class="small-card">
              <div class="card-top">
                <span class="card-text">클린카드</span>
              </div>
              <div class="card-middle">
                <div class="small-card__chip"></div>
              </div>
              <div class="card-bottom">
                <div class="card-bottom__number">
                  <span class="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div class="card-bottom__info">
                  <span class="card-text">YUJO</span>
                  <span class="card-text">12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <div class="input-container">
            <span class="input-title">카드 번호</span>
            <div class="input-box">
              <input class="input-basic" type="text" value="1111" />
              <input class="input-basic" type="text" value="2222" />
              <input class="input-basic" type="password" value="1111" />
              <input class="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div class="input-container">
            <span class="input-title">만료일</span>
            <div class="input-box w-50">
              <input
                class="input-basic"
                type="text"
                placeholder="MM"
                value="12"
              />
              <input
                class="input-basic"
                type="text"
                placeholder="YY"
                value="23"
              />
            </div>
          </div>
          <div class="input-container">
            <span class="input-title">카드 소유자 이름(선택)</span>
            <input type="text" class="input-basic" value="YUJO" />
          </div>
          <div class="input-container">
            <span class="input-title">보안코드(CVC/CVV)</span>
            <input class="input-basic w-25" type="password" value="111" />
          </div>
          <div class="input-container">
            <span class="input-title">카드 비밀번호</span>
            <input class="input-basic w-15" type="password" value="1" />
            <input class="input-basic w-15" type="password" value="1" />
            <input class="input-basic w-15" type="password" value="1" />
            <input class="input-basic w-15" type="password" value="1" />
          </div>
          <div class="button-box">
            <span class="button-text">다음</span>
          </div>
        </div>
      </div>

      {/* <!-- 

  PAGE 04

   --> */}

      <h2>4️⃣ 카드 추가 완료</h2>
      <div class="root">
        <div class="app flex-column-center">
          <div class="flex-center">
            <h2 class="page-title mb-10">카드등록이 완료되었습니다.</h2>
          </div>
          <div class="card-box">
            <div class="big-card">
              <div class="card-top">
                <span class="card-text__big">클린카드</span>
              </div>
              <div class="card-middle">
                <div class="big-card__chip"></div>
              </div>
              <div class="card-bottom">
                <div class="card-bottom__number">
                  <span class="card-text__big">1111 - 2222 - oooo - oooo</span>
                </div>
                <div class="card-bottom__info">
                  <span class="card-text__big">YUJO</span>
                  <span class="card-text__big">12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <div class="input-container flex-center w-100">
            <input
              class="input-underline w-75"
              type="text"
              placeholder="카드의 별칭을 입력해주세요."
            />
          </div>
          <div class="button-box mt-50">
            <span class="button-text">다음</span>
          </div>
        </div>
      </div>

      {/* <!-- 

  PAGE 05

   --> */}

      <h2>5️⃣ 카드 목록</h2>
      <div class="root">
        <div class="app flex-column-center">
          <div class="flex-center">
            <h2 class="page-title mb-10">보유 카드</h2>
          </div>
          <div class="card-box">
            <div class="small-card">
              <div class="card-top">
                <span class="card-text">클린카드</span>
              </div>
              <div class="card-middle">
                <div class="small-card__chip"></div>
              </div>
              <div class="card-bottom">
                <div class="card-bottom__number">
                  <span class="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div class="card-bottom__info">
                  <span class="card-text">YUJO</span>
                  <span class="card-text">12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <span class="card-nickname">법인카드</span>
          <div class="card-box">
            <div class="empty-card">+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
