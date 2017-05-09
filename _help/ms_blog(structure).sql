/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : ms_blog

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-10-20 10:45:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment_table
-- ----------------------------
DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(2) unsigned NOT NULL DEFAULT '0',
  `content` text CHARACTER SET latin1 NOT NULL COMMENT '用户评论的主体内容',
  `user_id` int(10) unsigned DEFAULT NULL COMMENT '评论的用户id',
  `user_name` char(20) CHARACTER SET latin1 NOT NULL COMMENT '评论的用户名',
  `paper_id` int(10) unsigned NOT NULL COMMENT '评论所属的文章id',
  `comment_date` datetime NOT NULL COMMENT '评论日期',
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for papers_table
-- ----------------------------
DROP TABLE IF EXISTS `papers_table`;
CREATE TABLE `papers_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章内容表，自增id',
  `title` varchar(255) CHARACTER SET latin1 NOT NULL COMMENT '文章的标题',
  `tag` char(20) CHARACTER SET latin1 NOT NULL COMMENT '文章所属标签名称',
  `subtag` char(50) CHARACTER SET latin1 DEFAULT NULL COMMENT '文章副标签，可为空',
  `publish_date` datetime NOT NULL COMMENT '文章上传/发布时间',
  `timeline` char(7) NOT NULL,
  `abstract` text CHARACTER SET latin1 NOT NULL COMMENT '文章简述',
  `content` text CHARACTER SET latin1 NOT NULL COMMENT '文章主体内容',
  UNIQUE KEY `id` (`id`),
  KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for subcomment_table
-- ----------------------------
DROP TABLE IF EXISTS `subcomment_table`;
CREATE TABLE `subcomment_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(2) unsigned NOT NULL COMMENT '评论类型，1表示一级子评论，2表示二级子评论，以此类推',
  `content` text CHARACTER SET latin1 NOT NULL COMMENT '子评论内容主体',
  `paper_id` int(10) unsigned NOT NULL COMMENT '子评论所属的文章id',
  `comment_id` int(10) unsigned NOT NULL COMMENT '所属评论的id',
  `comment_date` datetime NOT NULL COMMENT '子评论发布的时间',
  `user_name` char(20) CHARACTER SET latin1 NOT NULL,
  UNIQUE KEY `id` (`id`),
  KEY `type` (`type`),
  KEY `paper_id` (`paper_id`),
  KEY `comment_id` (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tags_index
-- ----------------------------
DROP TABLE IF EXISTS `tags_index`;
CREATE TABLE `tags_index` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '标签索引表，自增id',
  `name` char(20) CHARACTER SET latin1 NOT NULL COMMENT '标签索引表，标签名称',
  `papers_count` int(10) unsigned zerofill NOT NULL COMMENT '标签索引表，对应标签的文章数',
  UNIQUE KEY `id` (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for timeline_index
-- ----------------------------
DROP TABLE IF EXISTS `timeline_index`;
CREATE TABLE `timeline_index` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `timeline` char(7) NOT NULL,
  `papers_count` int(10) unsigned NOT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account` char(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_name` char(20) CHARACTER SET latin1 NOT NULL,
  `avatar` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `email` char(50) DEFAULT NULL,
  `mobile` char(255) DEFAULT NULL,
  `register_date` datetime NOT NULL,
  `github_link` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  UNIQUE KEY `id` (`id`),
  KEY `account` (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;