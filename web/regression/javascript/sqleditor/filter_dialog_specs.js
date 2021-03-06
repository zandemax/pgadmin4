//////////////////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2018, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////////////////
import filterDialog from 'sources/sqleditor/filter_dialog';
// import filterDialogModel from 'sources/sqleditor/filter_dialog_model';

describe('filterDialog', () => {
  jasmine.createSpy('sqlEditorController');
  describe('filterDialog', () => {
    describe('when using filter dialog', () => {
      beforeEach(() => {
        spyOn(filterDialog, 'dialog');
      });

      it('it should be defined as function', function() {
        expect(filterDialog.dialog).toBeDefined();
      });

      it('it should call without proper handler', () => {
        expect(filterDialog.dialog).not.toHaveBeenCalledWith({});
      });

    });
  });
});
