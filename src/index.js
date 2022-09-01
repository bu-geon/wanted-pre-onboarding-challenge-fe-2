/**
 * @author Bugeon Kim <bugeon.kim.kr@gmail.com>
 */

class Todo {
	/**
	 * @param {string} id 아이디
	 * @param {string} content 내용
	 * @param {boolean} isFinished 완료여부
	 * @param {string} category 카테고리
	 * @param {Array.<string>} [tags=[]] 태그들
	 */
	constructor(id, content, isFinished, category, tags) {}

	/**
	 * 내용 수정
	 * @param {string} newContent
	 */
	updateContent(newContent) {}

	/**
	 * 완료 여부 수정(현재 상태 -> !현재 상태)
	 */
	updateIsFinished() {}

	/**
	 * 카테고리 수정
	 * @param {string} newCategory
	 */
	updateCategory(newCategory) {}

	/**
	 * 태그 수정
	 * @param {Array.<string>} tags
	 */
	updateTags(tags) {}
}

/**
 * 할 일 추가(내용없이 추가 불가능)
 * @param {Todo} todo
 * @returns {number} result 추가 성공 1, 추가 실패(내용 없음) 0
 */
function create(todo) {
	return result;
}

/**
 * 모든 할 일 조회
 */
function readAll() {}

/**
 * id 기반 특정 할 일 조회
 * @param {string} id
 */
function readBy(id) {}

/**
 * id 기반 특정 할 일 삭제
 * @param {string} id
 */
function deleteBy(id) {}

/**
 * 모든 할 일 제거
 */
function deleteAll() {}

/**
 * 특정 할 일의 특정 태그를 삭제
 * @param {string} id
 * @param {string} targetTag
 */
function deleteTag(id, targetTag) {}

/**
 * 특정 할 일의 모든 태그를 제거
 * @param {string} id
 */
function deleteAllTags(id) {}
