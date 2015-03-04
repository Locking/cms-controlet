<?php
$_lang = array(
    "name" => "Сервер Collection",
	"title_main" => "Сервер Collection | ",
    "title" => array(
        "_error" => "Ошибка",	
        "_empty" => "Не найдено",
        "_off" => "Временно не доступен",
		"_denied" => "Доступ запрещен",
		"_auth" => "Вход в систему"
    ),
    "description" => array(
        "_error" => "",	
        "_empty" => "",
        "_off" => "",
		"_denied" => "",
		"_auth" => ""
    ),
    "keywords" => array(
        "_error" => "",	
        "_empty" => "",
        "_off" => "",
		"_denied" => "",
		"_auth" => ""
    ),
	"auth" => array(
		"error" => "Необходимо авторизоваться",
		"error_auth" => "Неверный логин или пароль",
		"error_code" => "Неверный код с картинки",
		"denied" => "Доступ запрещён"
	),
	"change_password" => array(
		"error" => "Заполните все поля",
		"error_auth" => "Неверный пароль",
		"error_length" => "Слишком короткий пароль",
		"error_repeat" => "Пароли не совпадают",
		"error_update" => "Не удалось изменить пароль",
		"save" => "Ваш пароль успешно изменен"
	),	
	"index" => array(
		"kpi" => array(
			"contracts" => "Contracts",
			"attempt" => "Attempt",
			"rpc" => "RPC Rate",
			"tpc" => "TPC Rate",
			"cr" => "Connect Rate",
			"ptp" => "PTP Rate",
			"cpc" => "Connect Per Contract",
			"spc" => "Spin Per Contract",
			"spp" => "Spin Per Phone",
			"abandoned" => "Abandoned",
		),
		"kpi_tooltip" => array(
			"contracts" => "Договора",
			"attempt" => "Вызовы",
			"rpc" => "((103+116 коды)/Кол-во договоров)*100%",
			"tpc" => "((104+107+115 коды)/Кол-во договоров)*100%",
			"cr" => "(Соединения/Вызовы)*100%",
			"ptp" => "(103/103+116 коды)*100%",
			"cpc" => "(Соединения/Кол-во договоров)*100%",
			"spc" => "Вызовы/Кол-во договоров",
			"spp" => "Вызовы/Кол-во телефонов",
			"abandoned" => "Потерянные"
		)		
	),
	"spin" => array(
		"empty_company" => "В архиве не найдена запись: ",
		"warning_types_phone" => "Типы телефонов по кампаниям различаются",
		"upload" => "Сохранены данные по кампании: ",
		"type1" => "Тип телефона",
		"type2" => "Номера, шт.",
		"type3" => "Вызовы, шт.",
		"type4" => "Spin",
		"all" => "Общий",
		"contract" => "Договоров",
		"chart" => array(
			"title" => "SPIN по телефонам",
			"axis" => array(
				"spin" => "Вызовы",
				"attempts" => "Попыток",
				"rpc" => "%",
				"tpc" => "%",
				"cr" => "%",
				"ptp" => "%",
				"cpc" => "%",
				"spc" => "Попыток",
				"spp" => "Попыток"
			),
			"type0" => "spin"
		),
		
		"phone1" => "Моб. 1",
		"phone2" => "Моб. 2",
		"phone3" => "Моб. 3",
		"phone4" => "Моб. 4",
		"phone5" => "Моб. 5",
		"phone6" => "Дом. 1",
		"phone7" => "Дом. 2",
		"phone8" => "Дом. 3",
		"phone9" => "Дом. 4",
		"phone10" => "Дом. 5",
		"phone11" => "Раб. 1",
		"phone12" => "Раб. 2",
		"phone13" => "Раб. 3",
		"phone14" => "Раб. 4",
		"phone15" => "Раб. 5",
		"phone16" => "Иной 1",
		"phone17" => "Иной 2",
		"phone18" => "Иной 3",
		"phone19" => "Иной 4",
		"phone20" => "Иной 5",
		"phone21" => "Вх. 1",
		"phone22" => "Вх. 2",
		"phone23" => "Входящий 3",
		"phone24" => "Входящий 4",
		"phone25" => "Входящий 5",
		"phone26" => "Плат. 1",
		"phone27" => "Платежи 2",
		"phone28" => "Платежи 3",
		"phone29" => "Платежи 4",
		"phone30" => "Платежи 5",
		"phone31" => "ДБО 1",
		"phone32" => "ДБО 2",
		"phone33" => "ДБО 3",
		"phone34" => "ДБО 4",
		"phone35" => "ДБО 5",
		"phone36" => "БКИ 1",
		"phone37" => "БКИ 2",
		"phone38" => "БКИ 3",
		"phone39" => "БКИ 4",
		"phone40" => "БКИ 5",
		"phone41" => "Резервный 1",
		"phone42" => "Резервный 2",
		"phone43" => "Резервный 3",
		"phone44" => "Резервный 4",
		"phone45" => "Резервный 5",
		"phone99" => "Phone 1",
		"phone100" => "Phone 2",
		"phone101" => "Phone 3",
		"phone102" => "Phone 4",
		"phone103" => "Phone 5",
		"phone104" => "Phone 6",
		"phone105" => "Phone 7",
		"phone106" => "Phone 8",
		"phone107" => "Phone 9",
		"phone108" => "Phone 10"
	),	
	"sms_send" => array(
		"preview" => array(
			"preview1" => "Договор",
			"preview2" => "Телефон",
			"preview3" => "Текст",
			"preview4" => "Сумма"
		),
		"delete_rbo" => "Данные из РБО удалены",
		"delete_delete" => "Договора для доп. исключения удалены"
	),	
	"sms_edit" => array(
		"title_add_text" => "Добавить новый текст сообщения",
		"title_add_type" => "Добавить новый раздел",
		"title_edit_text" => "Изменить текст сообщения:",
		"title_edit_type" => "Изменить раздел:",
		"title_delete_text" => "Удалить текст:",
		"error" => "Ошибка при совершении операции",
		"add" => "Добавлено",
		"edit" => "Изменено",
		"delete" => "Удалено",
		"delete_data" => "Данные удалены"
	),	
	"email_send" => array(
		"date" => "Дата",
		"total" => "Итого"
	),		
	"reports" => array(
		"sms" => array(
			"save" => "Данные сохранены",
			"empty" => "Данные отсутствуют",
			"main" => array(
				"title" => "Тип",
				"total" => "Итого",
				"chart" => array(
					"title" => "Сводные данные",
					"axis" => "шт.",
					"type0" => "Дата",
					"type1" => "Отправлено",
					"type2" => "Доставленно",
					"type3" => "Отклик"
				)
			)
		)
	),	
	"send_mail" => array(
		"name" => "Reports System",
		"email" => "helpcollection@svyaznoybank.ru",
		"foot" => "<br>Для включения или удаления из списка рассылки, обращайтесь на helpcollection@svyaznoybank.ru",
		"sms" => array(
			"title" => "Запущена SMS рассылка",
			"head" => "Была запущена SMS-рассылка: "
		),
		"info_delivery" => array(
			"title" => "Обработка доставленных SMS-сообщений",
			"head" => "Успешно получены и обработаны доставленные SMS по рассылке от"
		),		
		"order1" => array(
			"title" => "101_"
		)
	),	
	"codes" => array(
		"en" => array(
			"code2" => "ERROR",
			"code4" => "HANG_PORT",
			"code11" => "BUSY",
			"code12" => "CONTTONE",
			"code13" => "AUTOVOICE",
			"code15" => "NOANSWER",
			"code36" => "INTERCEPT",
			"code37" => "NOCIRCUIT",
			"code38" => "DISCONN",
			"code39" => "VACANT",
			"code40" => "REORDER",
			"code42" => "LINEFAIL",
			"code46" => "HU_OUT",
			"code48" => "HANG_OUT",
			"code49" => "OPDIED",
			"code98" => "AORECALL",
			"code103" => "CODE103",
			"code104" => "CODE104",
			"code106" => "CODE106",
			"code107" => "CODE107",
			"code114" => "CODE114",
			"code115" => "CODE115",
			"code116" => "CODE116"
		),
		"ru" => array(
			"code2" => "Неверный номер",
			"code4" => "Линия свободна после набора",
			"code11" => "Сигнал Занято",
			"code12" => "Факс или модем",
			"code13" => "Автоответчик",
			"code15" => "Нет ответа",
			"code36" => "Голосовое сообщение опреатора",
			"code37" => "Нет доступных линий связи",
			"code38" => "Разъединенный номер",
			"code39" => "Невозможно соединение по набранному номеру",
			"code40" => "Быстрый сигнал Занято",
			"code42" => "Сбой на телефонной линии",
			"code46" => "Разъединение клиента в очереди исходящих",
			"code48" => "Нет оператора для исходящего вызова",
			"code49" => "Нештатное завершение оператора",
			"code98" => "Повторные вызовы назначенные оператором",
			"code103" => "Обещание оплатить/уже олпатил",
			"code104" => "3-е лицо",
			"code106" => "Сброс",
			"code107" => "Неверный номер. Клиента не знают",
			"code114" => "Нет контакта",
			"code115" => "Уже звонили сегодня",
			"code116" => "Клиент"
		),
		"title" => array(
			"id" => "Код",
			"name_en" => "Имя",
			"name_ru" => "Описание",
			"num" => "Кол-во",
			"percent" => "Процент"
		),
		"chart" => array(
			"title" => "Динамика кодов завершения",
			"yaxis" => "Количество"
		)		
	),
	
	"remaining" => array(
		"year" => array('год','года','лет'),
		"month" => array('месяц','месяца','месяцев'),
		"day" => array('день','дня','дней'),
		"hour" => array('час','часа','часов'),
		"minute" => array('минуту','минуты','минут'),
		"second" => array('секунду','секунды','секунд'),
	),
	"upload" => array(
		"ok" => "Файл загружен",
		"error" => "Ошибка при загрузке файла"
	),	
	"system" => array(
        "no_connect_db" => "Нет соединения с БД",
		"error_db" => "Внутренняя ошибка при обращении к БД"
	)
);
?>