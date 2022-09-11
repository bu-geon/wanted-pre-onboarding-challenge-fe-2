/**
 * @author Bugeon Kim <bugeon.kim.kr@gmail.com>
 */

type id = string;

interface ITodo {
	id: id;
	content: string;
	isFinished?: boolean;
	category: string;
	tags: string[];
}

class Todo {
	/**
	 * @param {string} id 아이디
	 * @param {string} content 내용
	 * @type {boolean} isFinished 완료여부
	 * @param {string} category 카테고리
	 * @param {Array.<string>} [tags=[]] 태그들
	 */
	readonly #id: string;
	#content: string;
	#isFinished: boolean;
	#category: string;
	#tags: string[];
	constructor({ id, content, category, tags }: ITodo) {
		this.#id = id;
		this.#content = content;
		this.#isFinished = false;
		this.#category = category;
		this.#tags = tags;
	}

	get id() {
		return this.#id;
	}

	/**
	 * 내용 수정
	 * @param {string} newContent
	 */
	set content(newContent: string) {
		if (newContent.length > 0) {
			this.#content = newContent;
		}
	}

	/**
	 * 완료 여부 수정
	 */
	updateIsFinished() {
		this.#isFinished = !this.#isFinished;
	}

	/**
	 * 카테고리 수정
	 * @param {string} newCategory
	 */
	set category(newCategory: string) {
		if (newCategory.length > 0) {
			this.#category = newCategory;
		}
	}

	/**
	 * 태그 수정
	 * @param {Array.<string>} newTags
	 */
	set tags(newTags: string[]) {
		this.#tags = newTags;
	}

	/**
	 * 태그 삭제
	 * @param {string} targetTag
	 */
	deleteSpecificTag(targetTag: string) {
		this.#tags = this.#tags.filter((tag) => tag !== targetTag);
	}
}

interface ITodoList {
	list: Todo[];
	appendTodo: (todo: ITodo) => void;
	readAll: () => Todo[];
	readBy: (id: id) => Todo | null;
	deleteBy: (id: id) => void;
	deleteAll: () => void;
	deleteSpecificTagById: (id: id, targetTag: string) => void;
	deleteAllTagsBy: (id: id) => void;
}

const todos: ITodoList = {
	list: [],
	/**
	 * 할 일 추가(내용없이 추가 불가능)
	 * @param {Todo} todo
	 */
	appendTodo: function ({ id, content, category, tags }: ITodo) {
		if (content.length === 0) {
			return 'fail';
		}

		const todo = new Todo({ id, content, category, tags });
		this.list.push(todo);
	},
	/**
	 * 모든 할 일 조회
	 */
	readAll: function () {
		return this.list;
	},
	/**
	 * id 기반 특정 할 일 조회
	 * @param {string} id
	 */
	readBy: function (id: id) {
		const searchedTodo = this.list.find((todo) => todo.id === id);
		if (searchedTodo) {
			return searchedTodo;
		}
		return null;
	},
	/**
	 * id 기반 특정 할 일 삭제
	 * @param {string} id
	 */
	deleteBy: function (id: id) {
		this.list = this.list.filter((todo) => todo.id !== id);
	},
	/**
	 * 모든 할 일 제거
	 */
	deleteAll: function () {
		this.list = [];
	},
	/**
	 * 특정 할 일의 특정 태그를 삭제
	 * @param {string} id
	 * @param {string} targetTag
	 */
	deleteSpecificTagById: function (id: id, targetTag: string) {
		this.readBy(id)?.deleteSpecificTag(targetTag);
	},
	/**
	 * 특정 할 일의 모든 태그를 제거
	 * @param {string} id
	 */
	deleteAllTagsBy: function (id: id) {
		const searchedTodo = this.readBy(id);
		if (searchedTodo) {
			searchedTodo.tags = [];
		}
	},
};
