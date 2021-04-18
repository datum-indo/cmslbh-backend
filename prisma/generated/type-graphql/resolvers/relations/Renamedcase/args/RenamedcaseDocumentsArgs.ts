import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentOrderByInput } from "../../../inputs/CaseDocumentOrderByInput";
import { CaseDocumentWhereInput } from "../../../inputs/CaseDocumentWhereInput";
import { CaseDocumentWhereUniqueInput } from "../../../inputs/CaseDocumentWhereUniqueInput";
import { CaseDocumentScalarFieldEnum } from "../../../../enums/CaseDocumentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RenamedcaseDocumentsArgs {
  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  where?: CaseDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentOrderByInput], {
    nullable: true
  })
  orderBy?: CaseDocumentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseDocumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseDocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "createdBy" | "jenisDokumen" | "judulDokumen" | "keterangan" | "link" | "filename" | "updatedAt" | "updatedBy" | "caseId"> | undefined;
}
