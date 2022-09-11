/**
 * @author Bugeon Kim <bugeon.kim.kr@gmail.com>
 */
declare type id = string;
interface ITodo {
	id: id;
	content: string;
	isFinished?: boolean;
	category: string;
	tags: string[];
}
declare class Todo {
	#private;
	constructor({ id, content, category, tags }: ITodo);
	get id(): string;
	/**
	 * 내용 수정
	 * @param {string} newContent
	 */
	set content(newContent: string);
	/**
	 * 완료 여부 수정
	 */
	updateIsFinished(): void;
	/**
	 * 카테고리 수정
	 * @param {string} newCategory
	 */
	set category(newCategory: string);
	/**
	 * 태그 수정
	 * @param {Array.<string>} newTags
	 */
	set tags(newTags: string[]);
	/**
	 * 태그 삭제
	 * @param {string} targetTag
	 */
	deleteSpecificTag(targetTag: string): void;
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
declare const todos: ITodoList;
