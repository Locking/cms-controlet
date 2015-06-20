SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
--
-- Структура таблицы `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `level` enum('0','1','2','3','4','5') NOT NULL DEFAULT '0' COMMENT 'Уровень доступа',
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `keywords` text NOT NULL,
  `js_internal` varchar(300) NOT NULL COMMENT 'JS файлы с сайта',
  `js_external` varchar(500) NOT NULL COMMENT 'JS файлы извне',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `name`, `level`, `title`, `description`, `keywords`, `js_internal`, `js_external`) VALUES
(1, 'index', '0', 'Главная страница', '', '', '', ''),
(2, 'change_password', '1', 'Изменение пароля', '', '', '', ''),
(3, 'auth', '1', 'Вход в систему', '', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_worker` int(11) NOT NULL DEFAULT '0',
  `login` varchar(50) NOT NULL,
  `password` varchar(350) NOT NULL,
  `level` int(3) NOT NULL DEFAULT '1',
  `status` enum('act','no_act') NOT NULL DEFAULT 'act',
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `id_worker`, `login`, `password`, `level`, `status`) VALUES
(1, 1, 'admin', 'ae28ba743b02a094d371c56b07ae4678', 5, 'act');

-- --------------------------------------------------------

--
-- Структура таблицы `workers`
--

CREATE TABLE IF NOT EXISTS `workers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `phone` varchar(250) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(250) NOT NULL,
  `date_create` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `workers`
--

INSERT INTO `workers` (`id`, `name`, `phone`, `address`, `email`, `date_create`) VALUES
(1, 'Администратор', '', '', '', '0000-00-00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
