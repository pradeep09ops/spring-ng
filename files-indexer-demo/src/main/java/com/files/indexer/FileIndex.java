package com.files.indexer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="file_index")
public class FileIndex {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pk_id")
    private Integer pkId;
	
	@Column(name="field1")
    private String field1;
	
	@Column(name="field1_value")
    private String field1Value;
	
	@Column(name="field2")
    private String field2;
	
	@Column(name="field2_value")
    private String field2Value;
	
	@Column(name="field3")
    private String field3;
	
	@Column(name="field3_value")
    private String field3Value;
	
	@Column(name="field4")
    private String field4;
	
	@Column(name="field4_value")
    private String field4Value;
	
	@Column(name="field5")
    private String field5;
	
	@Column(name="field5_value")
    private String field5Value;
	
	@Column(name="field6")
    private String field6;
	
	@Column(name="field6_value")
    private String field6Value;
	
	@Column(name="field7")
    private String field7;
	
	@Column(name="field7_value")
    private String field7Value;
	
	@Column(name="field8")
    private String field8;
	
	@Column(name="field8_value")
    private String field8Value;
    
	public Integer getPkId() {
		return pkId;
	}
	public void setPkId(Integer pkId) {
		this.pkId = pkId;
	}
	public String getField1() {
		return field1;
	}
	public void setField1(String field1) {
		this.field1 = field1;
	}
	public String getField1Value() {
		return field1Value;
	}
	public void setField1Value(String field1Value) {
		this.field1Value = field1Value;
	}
	public String getField2() {
		return field2;
	}
	public void setField2(String field2) {
		this.field2 = field2;
	}
	public String getField2Value() {
		return field2Value;
	}
	public void setField2Value(String field2Value) {
		this.field2Value = field2Value;
	}
	public String getField3() {
		return field3;
	}
	public void setField3(String field3) {
		this.field3 = field3;
	}
	public String getField3Value() {
		return field3Value;
	}
	public void setField3Value(String field3Value) {
		this.field3Value = field3Value;
	}
	public String getField4() {
		return field4;
	}
	public void setField4(String field4) {
		this.field4 = field4;
	}
	public String getField4Value() {
		return field4Value;
	}
	public void setField4Value(String field4Value) {
		this.field4Value = field4Value;
	}
	public String getField5() {
		return field5;
	}
	public void setField5(String field5) {
		this.field5 = field5;
	}
	public String getField5Value() {
		return field5Value;
	}
	public void setField5Value(String field5Value) {
		this.field5Value = field5Value;
	}
	public String getField6() {
		return field6;
	}
	public void setField6(String field6) {
		this.field6 = field6;
	}
	public String getField6Value() {
		return field6Value;
	}
	public void setField6Value(String field6Value) {
		this.field6Value = field6Value;
	}
	public String getField7() {
		return field7;
	}
	public void setField7(String field7) {
		this.field7 = field7;
	}
	public String getField7Value() {
		return field7Value;
	}
	public void setField7Value(String field7Value) {
		this.field7Value = field7Value;
	}
	public String getField8() {
		return field8;
	}
	public void setField8(String field8) {
		this.field8 = field8;
	}
	public String getField8Value() {
		return field8Value;
	}
	public void setField8Value(String field8Value) {
		this.field8Value = field8Value;
	}
}
