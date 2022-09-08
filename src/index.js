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
	#id;
	#content;
	#isFinished;
	#category;
	#tags;
	constructor(id, content, isFinished, category, tags) {
		this.#id = id;
		this.#content = content;
		this.#isFinished = isFinished;
		this.#category = category;
		this.#tags = tags;
	}

	/**
	 * 내용 수정
	 * @param {string} newContent
	 */
	updateContent(newContent) {
		this.#content = newContent;
	}

	/**
	 * 완료 여부 수정(현재 상태 -> !현재 상태)
	 */
	updateIsFinished() {
		this.#isFinished = !this.#isFinished;
	}

	/**
	 * 카테고리 수정
	 * @param {string} newCategory
	 */
	updateCategory(newCategory) {
		this.#category = newCategory;
	}

	/**
	 * 태그 수정
	 * @param {Array.<string>} newTags
	 */
	updateTags(newTags) {
		this.#tags = newTags;
	}

	/**
	 * @param {string} targetTag
	 */
	deleteSpecificTag(targetTag) {
		this.#tags = this.#tags.filter((tag) => tag !== targetTag);
	}
}

const todos = {};
let id = 0;

/**
 * 할 일 추가(내용없이 추가 불가능)
 * @param {Todo} todo
 * @returns {number} result 추가 성공 1, 추가 실패(내용 없음) 0
 */
function create({ id, content, isFinished, category, tags }) {
	if (content.length === 0) {
		return 0;
	}

	const todo = new Todo(id, content, isFinished, category, tags);
	todos.push(todo);
}

/**
 * 모든 할 일 조회
 */
function readAll() {
	return todos;
}

/**
 * id 기반 특정 할 일 조회
 * @param {string} id
 */
function readBy(id) {
	if (todos[id]) {
		return todos[id];
	}
	return null;
}

/**
 * id 기반 특정 할 일 삭제
 * @param {string} id
 */
function deleteBy(id) {
	delete todos[id];
}

/**
 * 모든 할 일 제거
 */
function deleteAll() {
	todos = {};
}

/**
 * 특정 할 일의 특정 태그를 삭제
 * @param {string} id
 * @param {string} targetTag
 */
function deleteTag(id, targetTag) {
	if (!todos[id]) {
		return 'not exist';
	}

	todos[id].deleteSpecificTag(targetTag);

	return 'deleted';
}

/**
 * 특정 할 일의 모든 태그를 제거
 * @param {string} id
 */
function deleteAllTags(id) {
	if (!todos[id]) {
		return 'not exist';
	}

	todos[id].updateTags([]);

	return 'deleted';
}
