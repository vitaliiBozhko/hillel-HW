const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};
const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 52,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(obj) {
		Object.assign(this, obj)
	}
	render() {
		return `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role ${this.role}">
                    <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                </div>
            </div>
            ${this.courses ? this.renderCourses() : ``}
		</div>`
	}
	renderCourses() {
		let getMark = mark => {
			for (let key in gradation) {
				if (mark <= key) {
					return `<span class="${gradation[key]}">${gradation[key]}</span>`
				}
			}
		}
		let courseName = this.courses
			.map(item => `<p class="user__courses--course ${this.role}">${item.title} ${getMark(item.mark)}</p>`)
			.join(``)

		return `<div class="user__courses">
                ${courseName}
            </div>`
	}
}

class Student extends User {
	constructor(obj) {
		super(obj);
	}
}
class Lector extends User {
	constructor(obj) {
		super(obj);
	}
	renderCourses() {
		let getMark = mark => {
			for (let key in gradation) {
				if (mark <= key) {
					return `<span class="${gradation[key]}">${gradation[key]}</span>`
				}
			}
		}
		let courseName = this.courses
			.map(item => `
                <div class="user__courses--course ${this.role}">
                    <p>Title: <b>${item.title}</b></p>
                    <p>Lector's score: ${getMark(item.score)}</p>
                    <p>Average student's score: ${getMark(item.studentsScore)}</p>
                </div>
                `)
			.join(``)

		return `<div class="user__courses admin--info">
                ${courseName}
            </div>`
	}
}
class Admin extends User {
	constructor(obj) {
		super(obj);
	}
	renderCourses() {
		let getMark = mark => {
			for (let key in gradation) {
				if (mark <= key) {
					return `<span class="${gradation[key]}">${gradation[key]}</span>`
				}
			}
		}
		let courseName = this.courses
			.map(item => `
                <div class="user__courses--course ${this.role}">
                    <p>Title: <b>${item.title}</b></p>
                    <p>Lector's score: ${getMark(item.score)}</p>
                    <p>Lector: <b>${item.lector}</b></p>
                </div>
                `)
			.join(``)

		return `<div class="user__courses admin--info">
                ${courseName}
            </div>`
	}
}

const USERS_ROLE = {
	student: user => new Student(user),
	admin: user => new Admin(user),
	lector: user => new Lector(user)
}

let userClass = users
	.map(user => USERS_ROLE[user.role] ? USERS_ROLE[user.role](user) : new User(user))
	.map(user => user.render())
	.join(``);


document.write(`<div class="users">${userClass}</div>`)