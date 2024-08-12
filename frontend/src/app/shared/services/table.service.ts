import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable()
export class TableService {

    deepCopy(object: any | any[]) {
        return JSON.parse(JSON.stringify(object));
    }

    /**
     * sort array via single
     * @param sortAttribute {key: property of the object, value: 'ascend' or 'descend'}
     * @param inputData
     */
    sort(sortAttribute: { key: string, value: string }, inputData: any[]) {
        const dataArr = this.deepCopy(inputData);
        if (sortAttribute.key === '' || sortAttribute.value === null) {
            return dataArr;
        }

        let outputDataList = dataArr.sort((a, b) => {
            const isAsc = sortAttribute.value === 'ascend';
            switch (sortAttribute.key) {
                case sortAttribute.key:
                    return this.compare(
                        typeof a[sortAttribute.key] !== "string" ? a[sortAttribute.key] : a[sortAttribute.key].toUpperCase(),
                        typeof b[sortAttribute.key] !== "string" ? b[sortAttribute.key] : b[sortAttribute.key].toUpperCase(),isAsc
                    );
                default:
                    return 0;
            }
        });
        return outputDataList;
    }

    /**
     * Wild card search on all property of the object
     * @param input
     * @param inputData
     */
    search(input: any, inputData: any[]) {
        const searchText = (item) => {
            for (let key in item) {
                if (item[key] == null) {
                    continue;
                }

                if (typeof item[key] == 'number' && item[key] != 0) {
                    let date = formatDate(item[key], 'yyyy-MM-dd HH:mm:ss', 'en');
                    if (date.indexOf(input.toString()) !== -1) {
                        return true;
                    }
                    continue;
                }

                if (item[key].toString().toUpperCase().indexOf(input.toString().toUpperCase()) !== -1) {
                    return true;
                }
            }
        };
        inputData = inputData.filter(value => searchText(value));
        return inputData;
    }

    /**
     * if isAsc is true
     * a > b    = 1
     * a === b  = 0
     * a < b    = -1
     *
     * if isAsc is false
     * a > b    = -1
     * a === b  = 0
     * a < b    = 1
     *
     * @param a
     * @param b
     * @param isAsc
     */
    private compare(a, b, isAsc: boolean) {
        // null value is - (dash)
        if (!a) a = '-';
        if (!b) b = '-';

        if (a === b) return 0;

        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
