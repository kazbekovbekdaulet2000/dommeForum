import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Forum, Comment} from '../data';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  forum = {} as Forum;
  comments = [] as Array<Comment>;

  public loading = false;

  constructor(private service: ServiceService) { }
  ngOnInit(): void {

    this.getForums();
    console.log(this.forum)
  }
  


  getForums(){
    this.service.getForums(1).subscribe(
      forum =>{
        this.loading = true;
        this.forum = forum;
        this.comments = forum.comments;
        this.comments.reverse();
      }
    )
  }

  getCommentAuthor(id_num: any){
    let name;
    this.comments.find(elem =>{
      elem.id = id_num;
      console.log();
      name = elem.author.last_name;
      name = name.concat(" ");
      name = name.concat(elem.author.first_name.toString());
    })
    return name;
  }

  date(elem:Date){
    var date = new Date(elem).toLocaleDateString(); 
    return date;
  }

}
