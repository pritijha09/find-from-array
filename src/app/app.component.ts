import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  list = [];
  name = "Angular " + VERSION.major;
  public uuid: string;
  label2: string;
  label3: string;
  label4: string;
  completeUUID: string = "";

  add() {
    if (this.list.some(ele => ele.uuid === this.uuid)) {
      alert("Object found inside the array.");
      let index = this.list.findIndex(ele => ele.uuid === this.uuid);
      this.list.splice(index, 1);
    } else {
      alert("Object not found.");
      this.list.push({
        uuid: this.uuid,
        label2: this.label2,
        label3: this.label3,
        label4: this.label4
      });
    }

    //if(this.list)
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  generate() {
    this.list.forEach((ele, index) => {
      if (index === 0) {
        this.completeUUID += `${ele.uuid}`;
      } else {
        this.completeUUID += `-${ele.uuid}`;
      }
    });
    alert(this.completeUUID);
  }
}
