import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityOrderByInput } from "../../../inputs/CaseProgressActivityOrderByInput";
import { CaseProgressActivityWhereInput } from "../../../inputs/CaseProgressActivityWhereInput";
import { CaseProgressActivityWhereUniqueInput } from "../../../inputs/CaseProgressActivityWhereUniqueInput";
import { CaseProgressActivityScalarFieldEnum } from "../../../../enums/CaseProgressActivityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityOrderByInput], {
    nullable: true
  })
  orderBy?: CaseProgressActivityOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseProgressActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "capaian" | "createdAt" | "createdBy" | "hambatan" | "judulAktifitas" | "position" | "rencanaStrategi" | "targetAdvokasi" | "tglAktifitas" | "updatedAt" | "updatedBy" | "case_id"> | undefined;
}
