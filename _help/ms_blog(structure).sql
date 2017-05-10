/*
Navicat MySQL Data Transfer

Source Server         : 阿里云ECS
Source Server Version : 50718
Source Host           : 47.93.61.54:3306
Source Database       : ms_blog

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2017-05-10 09:49:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment_table
-- ----------------------------
DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '评论的自增id',
  `type` int(2) unsigned NOT NULL DEFAULT '0' COMMENT '评论的类型，默认为0，表示某篇文章的直接评论',
  `content` text NOT NULL COMMENT '评论的主体内容',
  `user_name` char(30) NOT NULL COMMENT '评论的用户的nickname',
  `paper_id` int(10) unsigned NOT NULL COMMENT '评论所属的文章id',
  `comment_date` datetime NOT NULL COMMENT '评论日期',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for papers_table
-- ----------------------------
DROP TABLE IF EXISTS `papers_table`;
CREATE TABLE `papers_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章内容表，自增id',
  `title` varchar(255) NOT NULL COMMENT '文章的标题',
  `tag` varchar(100) NOT NULL COMMENT '文章所属标签名称',
  `subtag` varchar(100) DEFAULT NULL COMMENT '文章副标签，可为空',
  `publish_date` datetime NOT NULL COMMENT '文章上传/发布时间',
  `timeline` char(7) CHARACTER SET latin1 DEFAULT NULL COMMENT '时间线（只包含年-月信息），由触发器填写',
  `abstract` text NOT NULL COMMENT '文章简述',
  `content` text NOT NULL COMMENT '文章主体内容',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for subcomment_table
-- ----------------------------
DROP TABLE IF EXISTS `subcomment_table`;
CREATE TABLE `subcomment_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '子评论的自增id',
  `type` int(2) unsigned NOT NULL COMMENT '评论类型，1表示一级子评论，2表示二级子评论，以此类推',
  `content` text NOT NULL COMMENT '子评论的主体内容',
  `paper_id` int(10) unsigned NOT NULL COMMENT '子评论所属的文章id',
  `comment_id` int(10) unsigned NOT NULL COMMENT '子评论所属的评论的id',
  `comment_date` datetime NOT NULL,
  `user_name` char(30) NOT NULL COMMENT '评论用户的nickname',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tags_index
-- ----------------------------
DROP TABLE IF EXISTS `tags_index`;
CREATE TABLE `tags_index` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '标签索引表，自增id',
  `name` varchar(100) NOT NULL COMMENT '标签名称',
  `papers_count` int(10) unsigned zerofill NOT NULL COMMENT '对应标签的文章数',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for timeline_index
-- ----------------------------
DROP TABLE IF EXISTS `timeline_index`;
CREATE TABLE `timeline_index` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '时间线索引表，自增id',
  `timeline` char(7) CHARACTER SET latin1 NOT NULL COMMENT '时间线，只包含年-月',
  `papers_count` int(10) unsigned NOT NULL COMMENT '对应时间线的文章书目',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TRIGGER IF EXISTS `add_trigger_before`;
DELIMITER ;;
CREATE TRIGGER `add_trigger_before` BEFORE INSERT ON `papers_table` FOR EACH ROW BEGIN
SET new.content = REPLACE(REPLACE(new.content, CHAR(10), ''), CHAR(13), '');
SET new.timeline = left(new.publish_date, 7);
END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `add_trigger_after`;
DELIMITER ;;
CREATE TRIGGER `add_trigger_after` AFTER INSERT ON `papers_table` FOR EACH ROW BEGIN
SET @count1 = (SELECT COUNT(*) FROM timeline_index WHERE timeline = new.timeline);
SET @count2 = (SELECT COUNT(*) FROM tags_index WHERE name = new.tag);
IF @count1 = 0 THEN
INSERT INTO timeline_index(timeline, papers_count) VALUES(new.timeline, 1);
ELSE
UPDATE timeline_index SET papers_count = papers_count + 1 WHERE timeline = new.timeline;
END IF;
IF @count2 = 0 THEN
INSERT INTO tags_index(name, papers_count) VALUES(new.tag, 1);
ELSE
UPDATE tags_index SET papers_count = papers_count + 1 WHERE name = new.tag;
END IF;
END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `delete_trigger`;
DELIMITER ;;
CREATE TRIGGER `delete_trigger` AFTER DELETE ON `papers_table` FOR EACH ROW BEGIN
UPDATE tags_index SET papers_count = papers_count - 1 WHERE name = old.tag;
UPDATE timeline_index SET papers_count = papers_count - 1 WHERE timeline = old.timeline;
DELETE FROM comment_table WHERE paper_id = old.id;
DELETE FROM subcomment_table WHERE paper_id = old.id;
END
;;
DELIMITER ;
