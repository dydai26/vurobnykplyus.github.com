// переклад 
function changeLanguage(language) {
    const about_headerElement = document.getElementById('about_header');
    const news_headerElement = document.getElementById('news_header');
    const product_linkElement = document.getElementById('product_link');
    const contact_headerElement = document.getElementById('contact_header')
   
    const about_hamElement = document.getElementById('about_ham');
    const news_hamElement = document.getElementById('news_ham');
    const contakt_hamElement = document.getElementById('contakt_ham');
    const product_hamElement = document.getElementById('product_ham')

    const Products_catalogElement = document.getElementById('Products_catalog'); 
    const tittlesweetsElement = document.getElementById('tittlesweets');
    const oatmealElement = document.getElementById('oatmeal');
    const cornElement = document.getElementById('corn');
    const detailElement = document.getElementById('detail');
    const dryingElement = document.getElementById('drying');
    const crackersElement = document.getElementById('crackers');
    const CONFESSIONERElement = document.getElementById('CONFESSIONER');
    const news_mainElement = document.getElementById('news_main');
    const txt_button_newsElement = document.getElementById('txt_button_news');
    const txt_button_news1Element = document.getElementById('txt_button_news1');
    const txt_button_news2Element = document.getElementById('txt_button_news2');
    const txt_button_news3Element = document.getElementById('txt_button_news3');
    const about_mainElement = document.getElementById('about_main');
   
    const about_main_txt = document.getElementById('about_main_txt');
    const txt_button_about_main = document.getElementById('txt_button_about_main');
    const Our_advantages = document.getElementById('Our_advantages');
    const star_1 = document.getElementById('star_1');
    const star_2 = document.getElementById('star_2');
    const star_3 = document.getElementById('star_3');
    const star4 = document.getElementById('star4');
    const star_txt1 = document.getElementById('star_txt1');
    const star_txt2 = document.getElementById('star_txt2');
    const star_txt3 = document.getElementById('star_txt3');
    const star_txt4 = document.getElementById('star_txt4');
    const successful = document.getElementById('successful');
    const namecompany = document.getElementById('namecompany');
    const address = document.getElementById('address');
    const region = document.getElementById('region');
    const socialnetwork = document.getElementById('socialnetwork')



    if (language === 'uk') {
        about_headerElement.textContent = 'Про нас';
        news_headerElement.textContent = 'Новини';
        product_linkElement.textContent = 'Продукція';
        contact_headerElement.textContent = 'Контакти';

        about_hamElement.textContent = 'Про нас';
        news_hamElement.textContent = 'Новини';
        product_hamElement.textContent = 'Продукція';
        contakt_hamElement.textContent = 'Контакти';
       
        Products_catalogElement.textContent = 'Каталог Продукції';
        oatmealElement.textContent = 'ВІВСЯНЕ';
        cornElement.textContent = 'КУКУРУДЗЯНЕ';
        detailElement.textContent = 'ДЕТАЛЬНІШЕ';
        dryingElement.textContent = 'СУШКА';
        crackersElement.textContent = 'СУШКА';
        CONFESSIONERElement.textContent = 'КОНДИТЕРКА';
        news_mainElement.textContent = 'НОВИНИ';
        txt_button_newsElement.textContent = 'Детальніше';
        txt_button_news1Element.textContent = 'Детальніше';
        txt_button_news2Element.textContent = 'Детальніше';
        txt_button_news3Element.textContent = 'Новини';
        txt_button_news1Element.textContent = 'Детальніше';
        about_mainElement.textContent = 'ПРО НАС';
        txt_button_about_main.textContent = 'ДЕТАЛЬНІШЕ';
        about_main_txt.textContent = 'ТОВ «ВИРОБНИК ПЛЮС» є одним із лідерів виробництва вівсяного, кукурудзяного печива, сушки та сухарю на всій території України за останні 15 років. Ми робимо нашу продукцію старанно та з душею.';
        Our_advantages.textContent = 'НАШІ ПЕРЕВАГИ';
        star_1.textContent = 'ЯКІСТЬ';
        star_2.textContent = 'Довіра та надійність';
        star_3.textContent = 'Локальне походження';
        star4.textContent = 'Клієнтське обслуговування';
        star_txt1.textContent = 'Наші клієнти можуть насолоджуватися смачними та вишуканими кондитерськими виробами, які виготовлені з урахуванням найвищих стандартів якості.';
        star_txt2.textContent = 'Компанія "Виробник Плюс" є символом якості та надійності на ринку кондитерської продукції, що дає нашим клієнтам впевненість у виборі наших товарів.';
        star_txt3.textContent = 'Наша продукція виготовлена в Україні з використанням українських інгредієнтів, що підкреслює нашу підтримку місцевих виробників та сприяє розвитку економіки країни.';
        star_txt4.textContent = 'команда завжди готова допомогти та відповісти на всі запитання клієнтів, щоб забезпечити найкращий досвід покупця.';
        successful.textContent = 'Успішне співробітництво';
        namecompany.textContent = '"ТОВ "ВИРОБНИК ПЛЮС"';
        address.textContent = 'вул. Черкасова 31, м. Кривий ріг';
        region.textContent = 'Дніпропетровська обл., 30079';
        socialnetwork.textContent = 'СОЦІАЛЬНІ МЕРЕЖІ';

        showTranslationConfirmation('Мова змінена на Українську!');


    } else if (language === 'en') {
        about_headerElement.textContent = 'About us';
        news_headerElement.textContent = 'News';
        product_linkElement.textContent = 'Products';
        contact_headerElement.textContent = 'Contacts';

        about_hamElement.textContent = 'About us';
        news_hamElement.textContent = 'News';
        product_hamElement.textContent = 'Products';
        contakt_hamElement.textContent = 'Contacts';
       
        Products_catalogElement.textContent = 'Product Catalog'; 
        detailElement.textContent = 'DETAIL'; 
        oatmealElement.textContent = 'OATMEAL'; 
        cornElement.textContent = 'CORN'; 
        dryingElement.textContent = 'DRYING'; 
        crackersElement.textContent = 'CRACKERS';
        CONFESSIONERElement.textContent = 'CONFESSIONER';
        news_mainElement.textContent = 'NEWS';
        txt_button_newsElement.textContent = 'DETAIL';
        txt_button_news1Element.textContent = 'DETAIL';
        txt_button_news2Element.textContent = 'DETAIL';
        txt_button_news3Element.textContent = 'NEWS';
        about_mainElement.textContent = 'ABOUT US';
        txt_button_about_main.textContent = 'DETAIL';
        about_main_txt.textContent = '"VYROBNYK PLYUS" LLC is one of the leaders in the production of oat, corn biscuits, drying and rusks throughout Ukraine for the past 15 years. We make our products diligently and with soul.';
        Our_advantages.textContent = 'OUR ADVANTAGE';
        star_1.textContent = 'QUALITY';
        star_2.textContent = 'Trust and reliability';
        star_3.textContent = 'Local origin';
        star4.textContent = 'Customer service';
        star_txt1.textContent = 'Our customers can enjoy delicious and refined confectionery products that are made with the highest quality standards in mind';
        star_txt2.textContent = 'The company "Vyrobnyk Plus" is a symbol of quality and reliability in the confectionery market, which gives our customers confidence in choosing our products.';
        star_txt3.textContent = 'Our products are made in Ukraine using Ukrainian ingredients, which emphasizes our support for local producers and contributes to the development of the country';
        star_txt4.textContent = 'team is always ready to help and answer all customer questions to ensure the best customer experience.';
        successful.textContent = 'Successful cooperation';
        namecompany.textContent = '"LLC "PRODUCER PLUS"';
        address.textContent = 'St. Cherkasova 31, Kryvyi Rih';
        region.textContent = 'Dnipropetrovsk region, 30079';
        socialnetwork.textContent = 'SOCIAL NETWORK';


        showTranslationConfirmation('Language changed to English!');
    }
    
}