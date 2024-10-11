<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-server');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>;l}-cRign!:xP A3Y_aA$2ri#m_iV1SChvgT,`}f4duURrnVaJ)bx*0%EE1@cT^');
define('SECURE_AUTH_KEY',  'cSoxoL=JjP[05uAH#@jX{6L;:fF@}/Fbu-zz>UVOu9OWegFe3bJOJwmrJCG~u<tF');
define('LOGGED_IN_KEY',    'S5xg2SZSzv,r A@5*oB|VH0{RdFv<+Z^ILR;TpfRtH.)0y-n%cyxm<8J+ lpi3Y8');
define('NONCE_KEY',        'byPF+S2<LtSUTg[%J @nx83Zf:AvL@j$(>h;vpK!:H|4lbqF]|q~6&FtXJYW(Zn,');
define('AUTH_SALT',        'YVeqwMTWfOY;b@|OxO*2A)1[51#/msvg.D<&ANrJ43/^JPSOl0)`mZlD[c=[8[Kp');
define('SECURE_AUTH_SALT', 'NxkKN(N2ujSK*v%Hrm+Gz1h@}c$4B6GTjp`bV,lOD<MM3D|0b{xlzf+5Bj=f0F3/');
define('LOGGED_IN_SALT',   '0[KMLCw/?C>8*IV@u~h4(QnUv#j%Wz:zR>F;,64>5eUO55Z@u#Tg9*b92j>^%.x-');
define('NONCE_SALT',       'VyD@*=:Z.wFsjOY*E5/0lehf479X]y? LaAG3+pKAL]3oL 5fpcbCei(h,v}s+&V');

define('JWT_AUTH_SECRET_KEY', 'A`=)I|2#N~*):;^*o-5j#;tU1wd!F7)Fn&+2gZ@l!x=HYZ971&,#aKudmpRqZy5J');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */

define("FS_METHOD", "direct");

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
