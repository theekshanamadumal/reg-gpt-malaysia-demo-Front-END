import { Component, Input, OnInit } from '@angular/core';
import { SourceDocumentModel } from 'src/app/core/models/source-document.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit{
  @Input() sourceDocuments: Array<SourceDocumentModel> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
